import semverSatisfies from 'semver/functions/satisfies'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { provider as Provider } from 'web3-core'
import { ContentHash } from 'web3-eth-ens'
import { namehash } from '@ethersproject/hash'
import Safe, { ContractNetworksConfig } from '@gnosis.pm/safe-core-sdk'

import Web3Adapter from '@gnosis.pm/safe-web3-lib'
import { FEATURES } from '@gnosis.pm/safe-react-gateway-sdk'
import memoize from 'lodash/memoize'
import safeMasterCopyAbi from './abis/gnosis_safe.json'
import safeProxyFactoryAbi from './abis/proxy_factory.json'
import multiSendAbi from './abis/multi_send.json'
import { ZERO_ADDRESS } from './ethAddresses'
import { EMPTY_DATA } from './ethTransactions'
import { getRpcServiceUrl, _getChainId } from 'src/config'
import { CHAIN_ID, ChainId } from 'src/config/chain.d'
import { isValidCryptoDomainName } from 'src/logic/wallets/ethAddresses'
import { getAddressFromUnstoppableDomain } from './utils/unstoppableDomains'
import { hasFeature } from 'src/logic/safe/utils/safeVersion'
import { checksumAddress } from 'src/utils/checksumAddress'
import { isValidAddress } from 'src/utils/isValidAddress'
import { Wallet } from 'bnc-onboard/dist/src/interfaces'
import { AbiItem } from 'web3-utils'

// This providers have direct relation with name assigned in bnc-onboard configuration
export enum WALLET_PROVIDER {
  METAMASK = 'METAMASK',
  TALLYHO = 'TALLYHO',
  TORUS = 'TORUS',
  PORTIS = 'PORTIS',
  FORTMATIC = 'FORTMATIC',
  SQUARELINK = 'SQUARELINK',
  WALLETCONNECT = 'WALLETCONNECT',
  TRUST = 'TRUST',
  OPERA = 'OPERA',
  // This is the provider for WALLET_LINK configuration on bnc-onboard
  COINBASE_WALLET = 'COINBASE WALLET',
  AUTHEREUM = 'AUTHEREUM',
  LEDGER = 'LEDGER',
  TREZOR = 'TREZOR',
  LATTICE = 'LATTICE',
  KEYSTONE = 'KEYSTONE',
  // Safe name as PAIRING_MODULE_NAME
  SAFE_MOBILE = 'SAFE MOBILE',
}

// With some wallets from web3connect you have to use their provider instance only for signing
// And our own one to fetch data
export const web3HttpProviderOptions = {
  timeout: 10_000,
}

const web3ReadOnly: Web3[] = []
export const getWeb3ReadOnly = (chainId = _getChainId()): Web3 => {
  if (!web3ReadOnly[chainId]) {
    web3ReadOnly[chainId] = new Web3(
      process.env.NODE_ENV !== 'test'
        ? new Web3.providers.HttpProvider(getRpcServiceUrl(), web3HttpProviderOptions)
        : 'ws://localhost:8545',
    )
  }

  return web3ReadOnly[chainId]
}

let web3: Web3
export const getWeb3 = (): Web3 => web3
export const setWeb3 = (provider: Provider): void => {
  web3 = new Web3(provider)
}
export const setWeb3ReadOnly = (): void => {
  web3 = getWeb3ReadOnly()
}
export const resetWeb3 = (): void => {
  web3 = web3ReadOnly[_getChainId()]
}

export const getChainIdFrom = (web3Provider: Web3): Promise<number> => {
  return web3Provider.eth.getChainId()
}

export const isHardwareWallet = (wallet: Wallet): boolean => {
  const isSupportedHardwareWallet = [WALLET_PROVIDER.LEDGER, WALLET_PROVIDER.TREZOR].includes(
    wallet?.name?.toUpperCase() as WALLET_PROVIDER,
  )
  const isHardwareWalletType = wallet?.type === 'hardware'

  return isSupportedHardwareWallet || isHardwareWalletType
}

export const isSmartContract = async (account: string, chainId: ChainId): Promise<boolean> => {
  let contractCode = ''
  try {
    contractCode = await getWeb3ReadOnly(chainId).eth.getCode(account)
  } catch (e) {
    console.log('e', e)
    // ignore
  }

  return !!contractCode && contractCode.replace(EMPTY_DATA, '').replace(/0/g, '') !== ''
}

const memoizedIsSmartContract = memoize(
  async (account: string, chainId: ChainId): Promise<boolean> => isSmartContract(account, chainId),
  (...args) => args.join(),
)

export const isSmartContractWallet = async (account: string): Promise<boolean> => {
  return account ? memoizedIsSmartContract(account, _getChainId()) : false
}

export const getAddressFromDomain = (name: string): Promise<string> => {
  if (isValidCryptoDomainName(name)) {
    return getAddressFromUnstoppableDomain(name)
  }
  return getWeb3ReadOnly().eth.ens.getAddress(name)
}

export const reverseENSLookup = async (address: string): Promise<string> => {
  if (!address || !hasFeature(FEATURES.DOMAIN_LOOKUP) || !isValidAddress(address)) {
    return ''
  }

  const web3 = getWeb3ReadOnly()
  const lookup = address.toLowerCase().substr(2) + '.addr.reverse'
  const nh = namehash(lookup)

  let ResolverContract: Contract
  let name = ''
  try {
    ResolverContract = await web3.eth.ens.getResolver(lookup)
  } catch (err) {
    return ''
  }

  let verifiedAddress = ''
  try {
    name = await ResolverContract.methods.name(nh).call()
    verifiedAddress = await web3.eth.ens.getAddress(name)
  } catch (err) {
    return ''
  }

  return checksumAddress(verifiedAddress) === checksumAddress(address) ? name : ''
}

export const getContentFromENS = (name: string): Promise<ContentHash> => web3.eth.ens.getContenthash(name)

export const isTxPendingError = (err: Error): boolean => {
  const WEB3_TX_NOT_MINED_ERROR = 'Transaction was not mined within'
  return (err.message || '').startsWith(WEB3_TX_NOT_MINED_ERROR)
}

export const getSDKWeb3Adapter = (signerAddress: string): Web3Adapter => {
  return new Web3Adapter({
    web3: getWeb3(),
    signerAddress,
  })
}

export const getSDKWeb3ReadOnly = (): Web3Adapter => {
  return new Web3Adapter({
    web3: getWeb3ReadOnly(),
    signerAddress: ZERO_ADDRESS,
  })
}

export const getSafeSDK = async (signerAddress: string, safeAddress: string, safeVersion: string): Promise<Safe> => {
  const networkId = (await getChainIdFrom(web3)).toString() as ChainId

  const ethAdapter = getSDKWeb3Adapter(signerAddress)

  let isL1SafeMasterCopy: boolean
  if (semverSatisfies(safeVersion, '<1.3.0')) {
    isL1SafeMasterCopy = true
  } else {
    isL1SafeMasterCopy = networkId === CHAIN_ID.ETHEREUM
  }

  const contractNetworks: ContractNetworksConfig = {
    '226': {
      safeMasterCopyAddress: '0x27E8d3369d422F89bD00545617b7f9F359bB8695',
      safeMasterCopyAbi: safeMasterCopyAbi.abi as unknown as AbiItem,

      safeProxyFactoryAddress: '0xa9E77dB68cA52F5af18F352e425d1c1699e871c8',
      safeProxyFactoryAbi: safeProxyFactoryAbi.abi as unknown as AbiItem,

      multiSendAddress: '0xA728cC559d33a55eDE21687f6A7Bd5fCb78140e7',
      multiSendAbi: multiSendAbi.abi as unknown as AbiItem,
    },
    '225': {
      safeMasterCopyAddress: '0xf044A28b460724a84a79C1F837695e848CE69036',
      safeMasterCopyAbi: safeMasterCopyAbi.abi as unknown as AbiItem,

      safeProxyFactoryAddress: '0x6E33A94648A8C754062c3626C8600D5F223F1964',
      safeProxyFactoryAbi: safeProxyFactoryAbi.abi as unknown as AbiItem,

      multiSendAddress: '0xEdd8638ab849a4718985fBd6044f333810a4F1d3',
      multiSendAbi: multiSendAbi.abi as unknown as AbiItem,
    },
  }

  return await Safe.create({
    ethAdapter,
    safeAddress,
    isL1SafeMasterCopy,
    contractNetworks,
  })
}
