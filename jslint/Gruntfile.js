module.exports = function (grunt) {
  grunt.initconfig({
    pkg: grunt.file.readJSON('package.json')
    grunt.registerTask('default', function () {
      console.log('Default');
    })
  })
};
