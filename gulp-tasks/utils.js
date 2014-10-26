(function() {

'use strict';

var $ = require('gulp-load-plugins')();
var del = require('del');
var gulp = require('gulp');
var pagespeed = require('psi');

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Deploy to gh-pages
gulp.task('deploy', ['default'], function () {
  return gulp.src('./dist/**/*')
  .pipe($.ghPages({
    cacheDir: '.deploy-git'
  }));
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://example.com',
  strategy: 'mobile'
}));

})();
