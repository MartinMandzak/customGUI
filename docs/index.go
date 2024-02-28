package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Welcome to my website!")
    })

    fs := http.FileServer(http.Dir("static/"))
    http.Handle("static/", http.StripPrefix("static/", fs))

		// change to webska.net:80
		err := http.ListenAndServe("webska:80", nil);
		if err != nil{
			fmt.Println("Error starting the server: ",err);
		}
}
