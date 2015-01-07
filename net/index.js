"use strict";

var net = require('net');

var server = net.Server();

server.on("connection", function(connection) {
	console.log("connection created");
	connection.on("data", function(data) {
		console.log("Received: " + String(data));
		connection.write("Echo " + String(data));
	});
});

server.listen(9615, function() {
	console.log("Listening to port 9615");
});