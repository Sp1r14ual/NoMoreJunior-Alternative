FROM node:24.14.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8502

CMD ["npx", "ng", "serve"]