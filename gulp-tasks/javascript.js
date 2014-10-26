(function() {

'use strict';

var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var gulp = require('gulp');
var reload = browserSync.reload;


// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

})();
