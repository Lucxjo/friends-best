package main

import (
    "github.com/gorilla/mux"
    "net/http"
    log "github.com/sirupsen/logrus"
)

func main() {
    r := mux.NewRouter()

    r.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))

    if err := http.ListenAndServe(":3000", r); err != nil {
        log.Fatalf("failed to start server: %v", err)
    }
}
