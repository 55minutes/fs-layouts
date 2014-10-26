(function() {

'use strict';

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});

})();
