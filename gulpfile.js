const gulp = require('gulp'),
mocha = require('gulp-mocha'),
babel = require('babel-register'),
gulpbabel= require('gulp-babel');


gulp.task('test:watch', function() {
return gulp.watch(['src/**/*.spec.js', 'src/**/*.js'])
  .on('change', function (file) {
    let filenamePath = file.path;
    if(file.path.indexOf('spec') === -1){  // this will works only of file name has spec.js suffix
      filenamePath = file.path.replace('.js', '.spec.js');
    }
    gulp.src(filenamePath)
      .pipe(mocha({
        compilers: [
          'js:babel-core/register'
        ]
      }))
  });
});