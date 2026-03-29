FROM node:24.14.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm install -g @angular/cli
# RUN npm run build --prod

EXPOSE 8502

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "8502"]
