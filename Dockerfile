FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# 앱 소스 추가
COPY . .

RUN yarn build

EXPOSE 80
CMD [ "node", "./dist/main.js" ]