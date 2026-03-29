FROM node:24.14.1-alpine

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 8502

CMD ["npx", "ng", "serve"]