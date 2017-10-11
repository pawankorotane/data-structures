var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-register');

gulp.task('unit', function () {
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
});