"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                "Gruntfile.js",
                "*.js",
                "http/*.js",
                "interpreter/batch/*.js",
                "net/integration/*.js",
                "unit-tests/io/*.js"
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