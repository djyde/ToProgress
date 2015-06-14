var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('js',function(){
  gulp.src('ToProgress.js')
    .pipe(uglify())
    .pipe(rename('ToProgress.min.js'))
    .pipe(gulp.dest('./'))
});

gulp.watch('./ToProgress.js', ['js']);

gulp.task('default', ['js']);