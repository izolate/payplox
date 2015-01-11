var gulp = require('gulp');
var requireDir = require('require-dir');

// require individual tasks
requireDir('./gulp/tasks', { recurse: true });

// development task
gulp.task('develop', ['js-dev', 'css', 'watch']);

// build task
gulp.task('build', ['js-prd', 'css']);
