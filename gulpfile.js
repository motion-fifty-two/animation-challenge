var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
});

//Move js files
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("./js/"))
});

//Watch task
gulp.task('serve', ['sass'], function() {
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['js','serve']);
