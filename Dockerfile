FROM node:9.5.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]