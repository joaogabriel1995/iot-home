FROM node:16 as base

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node . .
RUN npm install

FROM base as client_builder
COPY --chown=node:node ./src ./src
ARG REACT_APP_API_URL
RUN npm run build

FROM base as app

RUN npm i -g serve
RUN apt-get update && apt-get install -y xsel
RUN sudo apt install xsel
COPY --chown=node:node --from=client_builder /home/node/app/build ./build
CMD ["serve", "-s","build", "-l", "3000"]
