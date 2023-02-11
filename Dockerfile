FROM --platform=linux/amd64 node:latest

WORKDIR /RatingsReviews

COPY package*.json /RatingsReviews/

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]