"use strict";

var express = require("express");
var fs = require("fs");

var server = express();

server.get("/", serve);

server.listen(9615, function(error) {
	if (error) {
		console.log("Error when trying to listen in port 9615.");
		return;
	}
	console.log("Listening on port 9615");
});

function serve(request, response) {
	console.log("Reading index.html and serving it");
	var index = fs.readFileSync("index.html");
	response.writeHead(200, {"Content-Type": "html"});
	response.end(index);
}