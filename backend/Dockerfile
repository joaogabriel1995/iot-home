FROM node:16 as base

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node ./prisma ./prisma
RUN npm install
COPY --chown=node:node ["ts*", ".*", "nest-cli.json", "./"]

FROM base as server_builder
COPY --chown=node:node ./src ./src
RUN npm run build

FROM base as app

COPY --chown=node:node --from=server_builder /home/node/app/dist ./dist
CMD ["npm", "run", "start:prod"]
