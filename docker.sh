#!/bin/sh
m=$(cat ./build_number)
echo $m
wait 10
docker build -t ghcr.io/lucxjo/friends-best:build-$m .
docker build -t ghcr.io/lucxjo/friends-best:latest .
docker push ghcr.io/lucxjo/friends-best:build-$m
docker push ghcr.io/lucxjo/friends-best:latest

echo $((m+1)) > ./build_number