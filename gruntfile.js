module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      min: {
        files: [{
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'dist/js'
        }]
      }
    },
    imagemin: {
      min: {
        options: {
          optimizationLevel: 7,
          pngquant: true
        },
        files: [
          {expand: true, cwd: 'img', src: ['**/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/img'}
        ]
      }
    },
    cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'dist/css/basic.css': ['css/basic.css']
	    }
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','imagemin','cssmin']);

};