build-fe:
    cd ./fe && pnpm build && cd ..

build-server:
    go build ./server

build-all:
    cd ./fe && pnpm build && cp -r ./dist .. && cd ..
    go build ./server

git:
    git add -A && git commit -sS && git push

serve: build-all
    ./friends-best

go-tidy:
    cd ./server && go mod tidy && cd ..
go-get MOD:
    cd ./server && go get {{MOD}} && cd ..
