var path          = require('path'),
    gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    clean         = require('gulp-clean'),
    autoprefixer  = require('gulp-autoprefixer'),
    less          = require('gulp-less'),
    watch         = require('gulp-watch');

gulp.task('css', [], function() {
  return gulp.src('./src/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src'))
    .on('error', gutil.log);
});

gulp.task('css:watch', function () {
  return gulp.src('./src/*.less')
    .pipe(watch('./src/*.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src'))
    .on('error', gutil.log);
});

gulp.task('build', ['css']);
