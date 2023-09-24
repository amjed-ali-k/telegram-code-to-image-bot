FROM node:slim

WORKDIR /app

COPY . .

RUN pnpm i

CMD [ "node", "index.js" ]

EXPOSE 3000
