const gulp = require('gulp'),
mocha = require('gulp-mocha'),
babel = require('babel-register'),
gulpbabel= require('gulp-babel');

gulp.task('unit', function () {
<<<<<<< HEAD
    return gulp.src(['src/**/*.spec.js'])
        .pipe(mocha({
          compilers: [
               'js:babel-core/register'
          ]
        }));
});

gulp.task('test', ['unit'], function() {
  return gulp.watch(['src/**/*.spec.js'])
    .on('change', function(file) {
      gulp.src(file.path)
        .pipe(mocha({
           compilers: [
               'js:babel-core/register'
          ]
        }))
    });
=======
  return gulp.src(['src/**/*.spec.js'])
      .pipe(mocha({
        compilers: [
             'js:babel-core/register'
        ]
      }));
});

gulp.task('test', ['unit'], function() {
return gulp.watch(['src/**/*.spec.js'])
  .on('change', function (file) {
    gulp.src(file.path)
      .pipe(mocha({
        compilers: [
          'js:babel-core/register'
        ]
      }))
  });
>>>>>>> e2cfe38b530a9d66b1ac16b1c7e30e61e0fbb91f
});