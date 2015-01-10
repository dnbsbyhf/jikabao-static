var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less',function(){
    gulp.src('./less/page/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch','',function(){
    gulp.watch('./less/**/*.less', function(event) {
        gulp.start('less');
    });
});

gulp.task('default',['less']);
