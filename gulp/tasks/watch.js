var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('watch', function () {
  gulp.watch(config.assets + '/styl/**/*.styl', ['css']);
  gulp.watch(config.assets + '/js/**/*.js', ['js']);
});
