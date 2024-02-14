# Friends Best
A fan website for the Netflix series "Young Royals".

## Contributing
I suggest using [Just](https://github.com/casey/just) to help with building
local changes. [PNPM](https://pnpm.io) is used for the package manager for the
frontend and the server is written in [Go](https://go.dev).
### Build Frontend
```sh
just build-fe
```
or
```sh
cd fe
pnpm build
```

### Build server
```sh
just build-server
```
or
```sh
go build ./server
```

### Build all
```sh
just build-all
```

### Build and Run all
```sh
just serve
```
