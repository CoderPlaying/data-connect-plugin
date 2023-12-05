FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install
RUN npm run build

COPY ./.output /app/.output

EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]