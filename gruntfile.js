module.exports = function (grunt) {
    "use strict";

    /**
     * Grunt Config
     */
    grunt.initConfig({

        /**
         * Get package.json data
         */
        pkg: grunt.file.readJSON("package.json"),


        /**
         * Mocha Unit Tests & Blanket Coverage
         */
        blanket_mocha: {
            all: ["test/**/*.html"],
            options: {
                threshold: 90,
                run: false
            }
        },

        watch: {
            scripts: {
                files: [
                    'src/js/apps/**/*.js',
                    'src/js/entities/**/*.js',
                    'test/specs/**/*.js'
                ],
                tasks: ['tests'],
                options: {
                    spawn: false
                }
            }
        }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks("grunt-blanket-mocha");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Register Tasks
    grunt.registerTask("tests", ["blanket_mocha"]);

    grunt.registerTask("default", ["tests", "watch:scripts"]);

};
