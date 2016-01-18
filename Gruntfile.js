module.exports = function (grunt) {

  grunt.initConfig({

    dustjs: {
      compile: {
        files: {
          "public/scripts/templates.js": ["views/client/**/*.html"]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-dustjs');

  grunt.registerTask('build', ['dustjs']);
};
