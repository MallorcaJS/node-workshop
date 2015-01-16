"use strict";

// requires
var testing = require("testing");

/**
 * Run all module tests.
 */
exports.test = function(callback) {
	var tests = {};
	var files = {pad: "./unit-tests/pad.js"};

	for(var key in files) {
		tests[key] = require(files[key]).test;
	}

	testing.run(tests, callback);
};

// run tests if invoked directly
if (__filename == process.argv[1])
{
	exports.test(testing.show);
}
