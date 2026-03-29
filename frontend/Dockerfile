FROM node:24.14.1-alpine

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --dev
RUN node_modules/.bin/ng build --prod

COPY . .

EXPOSE 4200

CMD ["npm", "start"]