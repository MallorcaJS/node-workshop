"use strict";

console.log("Hallo peoples!!");

var fs = require("fs");
var fileName = typeof process.argv[2] == "string" ? process.argv[2] : "./file";

fs.readFile(fileName, function (error, data) {
	if (error) {
		console.log("Error occurred: " + error);
 		return;
	}
	console.log("File read: " + data);
});
try {
	var file = fs.readFileSync(fileName);
	console.log("FileSync read: " + file);
} catch (error) {
	console.log("Error cached: " + error);
}