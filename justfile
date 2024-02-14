build-fe:
    cd ./fe && pnpm build && cd ..

build-server:
    go build ./server

build-all:
    cd ./fe && pnpm build && cp -r ./dist .. && cd ..
    go build ./server

git:
    git add -A && git commit -sS && git push
