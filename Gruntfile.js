"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                "Gruntfile.js",
                "*.js",
                "http/*.js",
                "interpreter/*.js",
                "net/*.js",
                "unit-tests/*.js"
            ],
            options: {
                // use closest-through-parent jshint configuration file
                jshintrc: true
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerTask("default", ["jshint"]);
};