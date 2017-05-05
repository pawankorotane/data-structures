const gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  babel = require('babel-register'),
  gulpbabel= require('gulp-babel');

gulp.task('test-compiler', function () {
  return gulp.src(['src/**/*.spec.js'])
    .pipe(mocha({
      compilers: [
        'js:babel-core/register'
      ]
    })).on('error', function (e) {
      this.emit('end');
    })
});


gulp.task('build', (done) => {
  gulp.src('src/**/*.js')
    .pipe(gulpbabel()).on('error', function (e) {
      this.emit('end');
    })
    .pipe(gulp.dest('dist'))
    .on('end', done);
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch','test']);


gulp.task('test', ['test-compiler'], function () {
  return gulp.watch(['src/**/*.spec.js'])
    .on('change', function (file) {
      gulp.src(file.path)
        .pipe(mocha({
          compilers: [
            'js:babel-core/register'
          ]
        }))
    });
});