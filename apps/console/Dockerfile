FROM 395627044402.dkr.ecr.eu-west-1.amazonaws.com/gronda/base/nginx:1.20-alpine
LABEL org.opencontainers.image.source https://github.com/gronda-team/pezzo

RUN apk add --update nodejs

WORKDIR /app

COPY dist/apps/console/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps/console .

RUN chmod +x scripts/entrypoint.sh

ENTRYPOINT ["./scripts/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]