FROM node:24.14.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --dev

COPY . .

EXPOSE 4200

CMD ["npm", "start"]