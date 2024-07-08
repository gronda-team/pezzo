#!/bin/sh
set -e;
cd ./clickhouse && npx knex migrate:latest;
cd -;
exec "$@";