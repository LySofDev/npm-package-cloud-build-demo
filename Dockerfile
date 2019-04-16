FROM node:11.14.0-alpine

RUN apk update && apk upgrade

WORKDIR /mnt
COPY . .
RUN npm i