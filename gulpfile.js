const gulp = require('gulp')
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/stylesheet/sass/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/stylesheet/css'))
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('./src/stylesheet/sass/**/*.scss', ['sass']);
});
