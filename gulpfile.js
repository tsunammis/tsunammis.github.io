var path          = require('path'),
    gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    clean         = require('gulp-clean'),
    autoprefixer  = require('gulp-autoprefixer'),
    less          = require('gulp-less'),
    watch         = require('gulp-watch');

gulp.task('clean', function() {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('css', ['clean'], function() {
  return gulp.src('./*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
    .on('error', gutil.log);
});

gulp.task('css:watch', function () {
  return gulp.src('./*.less')
    .pipe(watch('./*.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
    .on('error', gutil.log);
});

gulp.task('build', ['css']);
