module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['js/*.js']
    },
    sass: {
  		options: {
  			trace: true
  		},
  		dist: {
  			files: {
  				'css/main.css': 'sass/sass_file.sass'
  			}
  		}
  	},
    
   watch: {
    		sass: {
        		files: ['sass/*.sass'],
        		tasks: ['sass'],
        		options: {
            			spawn: false,
        		}
    		},
		jshint: {
        		files: ['js/*.js'],
        		tasks: ['jshint'],
        		options: {
            			spawn: false,
        		},
    		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ["jshint","sass","watch"]);

};