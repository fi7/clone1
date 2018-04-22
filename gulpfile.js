const gulp = require('gulp'),
      watch = require('gulp-watch'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested');



gulp.task('html', function () {

});


gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/main.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});


//Watch
gulp.task('watch', function() {
  
  watch('./app/index.html', function () {
    gulp.start('html');
  });


  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
