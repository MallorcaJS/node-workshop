"use strict";

var testing = require("testing");

exports.pad = function(number, digits) {
	var padded = number.toString();
	while (padded.length < digits)
	{
		padded = "0" + padded;
	}
	return padded;
}

/********* UNIT TESTS **********/

function testPad(callback) {
	var number = 3;
	testing.assertEquals(exports.pad(number, 0), "3", "wrong padding for 0 digits", callback);
	testing.assertEquals(exports.pad(number, 1), "3", "wrong padding for 1 digits", callback);
	testing.assertEquals(exports.pad(number, 2), "03", "wrong padding for 2 digits", callback);
	testing.assertEquals(exports.pad(number, 3), "003", "wrong padding for 3 digits", callback);
	testing.success(callback); 
}

// start tests if invoked directly
if (__filename == process.argv[1]) {
	testing.run([testPad], testing.show);
}