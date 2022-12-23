import semverSatisfies from 'semver/functions/satisfies'
import {
  getSafeSingletonDeployment,
  getSafeL2SingletonDeployment,
  getProxyFactoryDeployment,
  getFallbackHandlerDeployment,
  getMultiSendCallOnlyDeployment,
  getSignMessageLibDeployment,
  SingletonDeployment,
} from '@gnosis.pm/safe-deployments'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import { LATEST_SAFE_VERSION } from 'src/utils/constants'
import { getChainById, _getChainId } from 'src/config'
import { ChainId } from 'src/config/chain.d'
import { ZERO_ADDRESS } from 'src/logic/wallets/ethAddresses'
import { calculateGasOf, EMPTY_DATA } from 'src/logic/wallets/ethTransactions'
import { getWeb3 } from 'src/logic/wallets/getWeb3'
import { GnosisSafe } from 'src/types/contracts/gnosis_safe.d'
import { ProxyFactory } from 'src/types/contracts/proxy_factory.d'
import { CompatibilityFallbackHandler } from 'src/types/contracts/compatibility_fallback_handler.d'
import { SignMessageLib } from 'src/types/contracts/sign_message_lib.d'
import { MultiSend } from 'src/types/contracts/multi_send.d'
import { getSafeInfo } from 'src/logic/safe/utils/safeInformation'
import { NonPayableTransactionObject } from 'src/types/contracts/types'
import { getMultiSendDeployment } from '@gnosis.pm/safe-deployments/dist/libs'
import { MultiSendCallOnly } from 'src/types/contracts/multi_send_call_only'

export const SENTINEL_ADDRESS = '0x0000000000000000000000000000000000000001'

let proxyFactoryMaster: ProxyFactory
let safeMaster: GnosisSafe
let fallbackHandler: CompatibilityFallbackHandler
let multiSendCallOnly: MultiSendCallOnly
let multiSend: MultiSend

const getSafeContractDeployment = ({ safeVersion }: { safeVersion: string }): SingletonDeployment | undefined => {
  // We check if version is prior to v1.0.0 as they are not supported but still we want to keep a minimum compatibility
  const useOldestContractVersion = semverSatisfies(safeVersion, '<1.0.0')
  // We have to check if network is L2
  const networkId = _getChainId()
  const chainConfig = getChainById(networkId)

  // We had L1 contracts in three L2 networks, xDai, EWC and Volta so even if network is L2 we have to check that safe version is after v1.3.0
  const useL2ContractVersion = chainConfig.l2 && semverSatisfies(safeVersion, '>=1.3.0')
  const getDeployment = useL2ContractVersion ? getSafeL2SingletonDeployment : getSafeSingletonDeployment

  return (
    getDeployment({
      version: safeVersion,
      network: networkId.toString(),
    }) ||
    getDeployment({
      version: safeVersion,
    }) ||
    // In case we couldn't find a valid deployment and it's a version before 1.0.0 we return v1.0.0 to allow a minimum compatibility
    (useOldestContractVersion
      ? getDeployment({
          version: '1.0.0',
        })
      : undefined)
  )
}

/**
 * Creates a Contract instance of the GnosisSafe contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 */
const getGnosisSafeContractInstance = (web3: Web3, chainId: ChainId): GnosisSafe => {
  const safeSingletonDeployment = getSafeContractDeployment({ safeVersion: LATEST_SAFE_VERSION })
  const contractAddress = (chainId == '226' ? '0x27E8d3369d422F89bD00545617b7f9F359bB8695' : '0xf044A28b460724a84a79C1F837695e848CE69036')

  if (!contractAddress) {
    throw new Error(`GnosisSafe contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(safeSingletonDeployment?.abi as AbiItem[], contractAddress) as unknown as GnosisSafe
}

/**
 * Creates a Contract instance of the GnosisSafeProxyFactory contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 */
const getProxyFactoryContractInstance = (web3: Web3, chainId: ChainId): ProxyFactory => {
  const proxyFactoryDeployment =
    getProxyFactoryDeployment({
      version: LATEST_SAFE_VERSION,
      network: chainId.toString(),
    }) ||
    getProxyFactoryDeployment({
      version: LATEST_SAFE_VERSION,
    })
  const contractAddress = (chainId == '226' ? '0xa9E77dB68cA52F5af18F352e425d1c1699e871c8' : '0x6E33A94648A8C754062c3626C8600D5F223F1964')

  if (!contractAddress) {
    throw new Error(`GnosisSafeProxyFactory contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(proxyFactoryDeployment?.abi as AbiItem[], contractAddress) as unknown as ProxyFactory
}

/**
 * Creates a Contract instance of the FallbackHandler contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 */
const getFallbackHandlerContractInstance = (web3: Web3, chainId: ChainId): CompatibilityFallbackHandler => {
  const fallbackHandlerDeployment =
    getFallbackHandlerDeployment({
      version: LATEST_SAFE_VERSION,
      network: chainId.toString(),
    }) ||
    getFallbackHandlerDeployment({
      version: LATEST_SAFE_VERSION,
    })
  const contractAddress = (chainId == '226' ? '0x93e9275013A582E44cAA11bAd3c682C8BbCBc67f' : '0x085B90B91C758B68f0Fce8cC9aC7a08A6e2fc026')

  if (!contractAddress) {
    throw new Error(`FallbackHandler contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(
    fallbackHandlerDeployment?.abi as AbiItem[],
    contractAddress,
  ) as unknown as CompatibilityFallbackHandler
}

/**
 * Creates a Contract instance of the MultiSend contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 */
const getMultiSendCallOnlyContractInstance = (web3: Web3, chainId: ChainId): MultiSendCallOnly => {
  const multiSendDeployment =
    getMultiSendCallOnlyDeployment({
      network: chainId.toString(),
    }) || getMultiSendCallOnlyDeployment()
  const contractAddress = (chainId == '226' ? '0xEd54B1373ab0693F07e06DC35A57c52cEde13cF2' : '0xf5a88A6a40EF27e494A3376547d3d8df792A66E4')

  if (!contractAddress) {
    throw new Error(`MultiSendCallOnly contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(multiSendDeployment?.abi as AbiItem[], contractAddress) as unknown as MultiSendCallOnly
}

/**
 * Creates a Contract instance of the MultiSend contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 */
const getMultiSendContractInstance = (web3: Web3, chainId: ChainId): MultiSend => {
  const multiSendDeployment =
    getMultiSendDeployment({
      network: chainId.toString(),
    }) || getMultiSendDeployment()
  const contractAddress = (chainId == '226' ? '0xA728cC559d33a55eDE21687f6A7Bd5fCb78140e7' : '0xEdd8638ab849a4718985fBd6044f333810a4F1d3')

  if (!contractAddress) {
    throw new Error(`MultiSend contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(multiSendDeployment?.abi as AbiItem[], contractAddress) as unknown as MultiSend
}

/**
 * Returns an address of SignMessageLib for passed chainId
 * @param {ChainId} chainId
 * @returns {string}
 */
export const getSignMessageLibAddress = (chainId: ChainId): string | undefined => {
  const signMessageLibDeployment =
    getSignMessageLibDeployment({
      network: chainId.toString(),
    }) || getSignMessageLibDeployment()
  const contractAddress = (chainId == '226' ? '0x3C9eB8c8CaF4d5e3B27F01a8187857A3541Ac508' : '0xf2376b5c0c71819eB9D5ECc7BB44a0C2B31736Ec')

  if (!contractAddress) {
    throw new Error(`SignMessageLib contract not found for chainId: ${chainId}`)
  }

  return contractAddress
}

/**
 * Returns a Web3 Contract instance of the SignMessageLib contract
 * @param {Web3} web3
 * @param {ChainId} chainId
 * @returns {SignMessageLib}
 */
export const getSignMessageLibContractInstance = (web3: Web3, chainId: ChainId): SignMessageLib => {
  const signMessageLibDeployment =
    getSignMessageLibDeployment({
      network: chainId.toString(),
    }) || getSignMessageLibDeployment()
  const contractAddress = (chainId == '226' ? '0x3C9eB8c8CaF4d5e3B27F01a8187857A3541Ac508' : '0xf2376b5c0c71819eB9D5ECc7BB44a0C2B31736Ec')

  if (!contractAddress) {
    throw new Error(`SignMessageLib contract not found for chainId: ${chainId}`)
  }

  return new web3.eth.Contract(signMessageLibDeployment?.abi as AbiItem[], contractAddress) as unknown as SignMessageLib
}

export const getMasterCopyAddressFromProxyAddress = async (proxyAddress: string): Promise<string | undefined> => {
  let masterCopyAddress: string | undefined
  try {
    const res = await getSafeInfo(proxyAddress)
    masterCopyAddress = res.implementation.value
    if (!masterCopyAddress) {
      console.error(`There was not possible to get masterCopy address from proxy ${proxyAddress}.`)
    }
  } catch (e) {
    e.log()
  }
  return masterCopyAddress
}

export const instantiateSafeContracts = (): void => {
  const web3 = getWeb3()
  const chainId = _getChainId()

  // Create ProxyFactory Master Copy
  proxyFactoryMaster = getProxyFactoryContractInstance(web3, chainId)

  // Create Safe Master copy
  safeMaster = getGnosisSafeContractInstance(web3, chainId)

  // Create Fallback Handler
  fallbackHandler = getFallbackHandlerContractInstance(web3, chainId)

  // Create MultiSend contract
  multiSend = getMultiSendContractInstance(web3, chainId)

  // Create MultiSendCallOnly contract
  multiSendCallOnly = getMultiSendCallOnlyContractInstance(web3, chainId)
}

export const getSafeMasterContract = (): GnosisSafe => {
  instantiateSafeContracts()
  return safeMaster
}

export const getSafeMasterContractAddress = (): string => {
  return safeMaster.options.address
}

export const getFallbackHandlerContractAddress = (): string => {
  return fallbackHandler.options.address
}

export const getMultiSendCallOnlyContract = (): MultiSendCallOnly => {
  return multiSendCallOnly
}

export const getMultiSendCallOnlyContractAddress = (): string => {
  return multiSendCallOnly.options.address
}

export const getMultiSendContract = (): MultiSend => {
  return multiSend
}

export const getMultiSendContractAddress = (): string => {
  return multiSend.options.address
}

export const getSafeDeploymentTransaction = (
  safeAccounts: string[],
  numConfirmations: number,
  safeCreationSalt: number,
): NonPayableTransactionObject<string> => {
  const gnosisSafeData = safeMaster.methods
    .setup(
      safeAccounts,
      numConfirmations,
      ZERO_ADDRESS,
      EMPTY_DATA,
      fallbackHandler.options.address,
      ZERO_ADDRESS,
      0,
      ZERO_ADDRESS,
    )
    .encodeABI()
  return proxyFactoryMaster.methods.createProxyWithNonce(safeMaster.options.address, gnosisSafeData, safeCreationSalt)
}

export const estimateGasForDeployingSafe = async (
  safeAccounts: string[],
  numConfirmations: number,
  userAccount: string,
  safeCreationSalt: number,
): Promise<number> => {
  const proxyFactoryData = getSafeDeploymentTransaction(safeAccounts, numConfirmations, safeCreationSalt).encodeABI()

  return calculateGasOf({
    data: proxyFactoryData,
    from: userAccount,
    to: proxyFactoryMaster.options.address,
  }).then((value) => value * 2)
}

export const getGnosisSafeInstanceAt = (safeAddress: string, safeVersion: string): GnosisSafe => {
  const safeSingletonDeployment = getSafeContractDeployment({ safeVersion })

  const web3 = getWeb3()
  return new web3.eth.Contract(safeSingletonDeployment?.abi as AbiItem[], safeAddress) as unknown as GnosisSafe
}
