module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["*.js", "lib/*.js", "test/*.js"],
            options: {
                esnext: true, 
                globals: {
                    jQuery: true
                }
            }
        }, 
        less: {
            development: {
                files: {
                    "public_11/css/style.css" : ["less/*.less"]
                }
            }
        },
		autoprefixer: {
			single_file: {
				src: "public_11/css/style.css",
				dest: "public_11/css/style.css"
			}
		},
        browserify: {
            client: {
                src : ["app-client.js"], 
                dest: "public_11/js/bundle.js"
            }
        }
    });
    //End of Grunt Config settings

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("css", ["less", "autoprefixer"]);
    grunt.registerTask("js", ["browserify"]);
    grunt.registerTask("default", ["jshint", "css", "js"]);
};