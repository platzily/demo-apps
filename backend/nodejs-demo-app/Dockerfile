FROM node:16-alpine3.12

WORKDIR /nodejs-demo-app

COPY package.json package.json
COPY package-lock.json package-lock.json

# RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["node", "/nodejs-demo-app/server.js"]