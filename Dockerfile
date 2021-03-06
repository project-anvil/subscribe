FROM alpine:3.9

WORKDIR /app

COPY . /app

RUN apk add npm nodejs
RUN npm install && npm install sqlite3

ENV PORT 80

CMD ./bin/www
