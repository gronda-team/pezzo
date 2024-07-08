FROM 395627044402.dkr.ecr.eu-west-1.amazonaws.com/gronda/base/node:18.12-slim AS base
LABEL org.opencontainers.image.source https://github.com/gronda-team/pezzo

RUN apt-get update
RUN apt-get install -y openssl curl

WORKDIR /app

COPY ./dist/apps/server/package*.json ./

COPY ./apps/server/entrypoint.sh ./

RUN npm i --omit=dev

COPY ./dist/apps/server .

RUN npx prisma generate

COPY ./clickhouse ./clickhouse

RUN cd clickhouse && npm i && cd -

RUN chmod +x entrypoint.sh

ENV PORT=3000
EXPOSE $PORT

ENTRYPOINT ["./entrypoint.sh"]