#!/bin/bash
cd ./clickhouse && npx knex migrate:latest || cd -
node main.js