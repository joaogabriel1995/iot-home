FROM node:18 as base

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node . .
RUN npm install -g npm@9.6.1
RUN npm install

FROM base as client_builder
COPY --chown=node:node ./src ./src
ARG REACT_APP_API_URL
RUN npm run build

FROM base as app

RUN npm i -g serve
COPY --chown=node:node --from=client_builder /home/node/app/build ./build

CMD ["npm", "run" ,"prod"]
