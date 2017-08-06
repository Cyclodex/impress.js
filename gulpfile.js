'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


/**
 * Browser sync
 */
gulp.task('serve', ['watch'], function () {
    // Start a browsersync static file server
    browserSync.init({
        open: true,
        notify: false,
        server: {
            baseDir: './',
            index: 'garaio.html'
        }
    });

    gulp.watch([
            '*.html',
            'less/*'
        ],
        ['reload']
    );
});

/**
 * Reloads the browser
 */
gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});


/**
 * Trying out an gulp watcher for less
 */
gulp.task('watch', function() {
  // Watch less
  gulp.watch(
    [
      './less/garaio.less'
    ],
    ['less']
  );
});

var less = require('gulp-less');
gulp.task('less', [], function() {
    return gulp.src('./less/garaio.less')
        // Build less
        .pipe(less())
        // put production file
        .pipe(gulp.dest('./css/'));
});

/**
 * Default task runs the local build
 */
gulp.task('default', ['localBuild']);
