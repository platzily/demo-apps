FROM node:16-alpine3.12 as dependencies
WORKDIR /hello-world
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:16-alpine3.12 as builder
WORKDIR /hello-world
COP