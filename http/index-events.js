"use strict";

var http = require("http");
var fs = require("fs");

var server = new http.Server();

server.on("request", serve);

function serve(request, response) {
	console.log("Reading index.html and serving it");
	var index = fs.readFileSync("index.html");
	response.writeHead(200, {"Content-Type": "html"});
	response.end(index);
}

server.listen(9615, function() {
	console.log("Listening on port 9615");
});