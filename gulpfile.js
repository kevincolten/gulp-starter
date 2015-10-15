var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('css', function () {
  gulp.src('./style.css')
    .pipe(uglifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./'));
});