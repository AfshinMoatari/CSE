var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var deploy = require('gulp-gh-pages');

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'js'], function() {

  browserSync.init({
    server: "./app"
  });

  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/js/*.js", ['js']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// Move the javascript files into the app/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js', 'node_modules/gsap/src/minified/TweenMax.min.js',
      'node_modules/gsap/src/minified/easing/EasePack.min.js', 'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js', 'node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    ])
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.stream());
});

// Push build to gh-pages
gulp.task('deploy', function() {
  return gulp.src("./app/**/*")
    .pipe(deploy())
});

gulp.task('default', ['serve']);
