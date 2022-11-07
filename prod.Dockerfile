FROM node:14 as react-build-step

# Grab needed environment variables from .env.example
ENV REACT_APP_ENV=production

RUN apt-get update \
    && apt-get install -y libusb-1.0-0 libusb-1.0-0-dev libudev-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN sed -i -e '/networkAddresses/a "226": "0x0b9F945174E1b340B87f228FCeeF4269AE7f559c",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/compatibility_fallback_handler.json
RUN sed -i -e '/networkAddresses/a "226": "0x1111111111111111111111111111111111111111",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/create_call.json
RUN sed -i -e '/networkAddresses/a "226": "0x2222222222222222222222222222222222222222",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/gnosis_safe.json
RUN sed -i -e '/networkAddresses/a "226": "0x58cf4D1A611164b6E582d867f3975f19a2B6887b",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/gnosis_safe_l2.json
RUN sed -i -e '/networkAddresses/a "226": "0xEd54B1373ab0693F07e06DC35A57c52cEde13cF2",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/multi_send_call_only.json
RUN sed -i -e '/networkAddresses/a "226": "0xA728cC559d33a55eDE21687f6A7Bd5fCb78140e7",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/multi_send.json
RUN sed -i -e '/networkAddresses/a "226": "0x6201f7686B24fbb725315Aa0B3D967743D7732fB",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/proxy_factory.json
RUN sed -i -e '/networkAddresses/a "226": "0x3333333333333333333333333333333333333333",' node_modules/@gnosis.pm/safe-deployments/dist/assets/v1.3.0/sign_message_lib.json

COPY . .

RUN yarn build

# Deploy the build
FROM nginx:1-alpine

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build-step /app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
