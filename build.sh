#!/usr/bin/env bash

echo "building mongo, server, and client locally..."

docker-compose up --build --force-recreate
