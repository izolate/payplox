var config = require('../config');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var to5ify = require('6to5ify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('js', function () {
  return browserify(config.mainjs)
    .transform(to5ify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(config.dist));
});
