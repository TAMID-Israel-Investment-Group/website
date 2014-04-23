module.exports = function(grunt) {
	var SRC_CSS = 'public/css/src/',
			SRC_JS = 'public/js/src/',
			SRC_CSS_BUILD = SRC_CSS + 'style.css',
			SRC_CSS_LESS = SRC_CSS + 'jrc.less',
			BUILD_CSS = 'public/css/bin/',
			BUILD_JS = 'public/js/bin/';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
		},
		clean: {
		},
		less: {
			css: {
				src: ['public/css/src/vendor/*.css', SRC_CSS + 'tamid.less'],
        dest: SRC_CSS + 'out.css'
			}
		},
		watch: {
			less: {
				files: ['public/css/src/*.less'],
				tasks: ['less', 'concat:css']
			},
			js: {
				files: ['public/js/src/*.js'],
				tasks: ['concat:js']
			}
		},
		concat: {
			css: {
				src: [SRC_CSS + "*.css"],
        dest: BUILD_CSS + 'style.css'
			},
	  	less: {
		    options: {
		    },
		    src: [SRC_CSS + '*.less'],
		    dest: BUILD_CSS + 'main.less'
		  },
		  js: {
		  	options: {
		  	},
		  	src: [SRC_JS + '*.js'],
		  	dest: BUILD_JS + 'tamid.js'
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib');

	grunt.registerTask('default', 'watch');
};
