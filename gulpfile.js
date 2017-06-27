var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    rollup = require('gulp-rollup'),
    notify = require('gulp-notify');

var jsSources = ['scripts/**/*.js'],
    sassSources = ['styles/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
  .pipe(connect.reload())
});

gulp.task('js', function() {
  return gulp.src(jsSources)
    .pipe(rollup({
      "format": "iife",
      "plugins": [
        require("rollup-plugin-babel")({
          "presets": [["es2015", { "modules": false }]],
          "plugins": ["external-helpers"]
        })
      ],
      entry: './scripts/main.js'
    }))
    .on('error',
      notify.onError(function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.message, "\n", err.codeFrame);
        return {
          title: "Gulp Error",
          message: err.message,
          sound: "Bottle"
        }
      })
    )
    .pipe(concat('script.js'))
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);
