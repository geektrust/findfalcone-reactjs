package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("ReactJS Server running on 3000")
	http.Handle("/", http.FileServer(http.Dir("./")))
	http.ListenAndServe(":3000", nil)
}
