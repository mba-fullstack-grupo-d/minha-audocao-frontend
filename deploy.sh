#!/bin/bash
yarn install
yarn build
docker build -t minhaudocao/frontend .
docker-compose up -d
