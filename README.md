# findfalcone-ui

This is a sample web app, written in normal Javascript/Jquery, AngularJS and ReactJS. It is running on a Go Web Server. To execute this application you need Go 1.5 installed.

## Pre-requisites 

Go Lang 1.5 should installed to run the go server.

To start the app run the command `go run server.go`. The web app will be up on Port 4000

1. `index.html` and `index.js` uses Javascript and JQuery to call the  `/token` and `/find` APIs . Access it with `http://localhost:4000`

2. `angular.html` and `angular.js` uses AngularJS to call the `/token` and `/find` APIs.  Access it with `http://localhost:4000/angular.html`

In the above html's, I assume that the Get Token button will be clicked to get back the token and then that token will be used to fill the Request JSON of /find API. This request json data should entered in the textarea and Find button should be clicked to call /find API.



3. react.html and react.js uses ReactJS to showcase some HTML built using ReactJS. It calls `/planets` and `/vehicles` APIs.  Access it with `http://localhost:4000/react.html` 


