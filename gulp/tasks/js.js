var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('js', function () {
  return gulp.src(config.indexjs)
    .pipe(plugins.webpack({
      output: { filename: 'index.js' }
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.dist));
});
