FROM node:16-alpine3.12 as dependencies
WORKDIR /hello-world
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:16-alpine3.12 as builder
WORKDIR /hello-world
COPY . .
COPY --from=dependencies /hello-world/node_modules ./node_modules
RUN npm run build

FROM node:16-alpine3.12 as runner
WORKDIR /hello-world
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /hello-world/next.config.js ./
COPY --from=builder /hello-world/public ./public
COPY --from=builder /hello-world/.next ./.next
COPY --from=builder /hello-world/node_modules ./node_modules
COPY --from=builder /hello-world/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]