FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]
