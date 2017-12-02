var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var modernizr = require('gulp-modernizr');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var concat = require('gulp-concat');
var deploy = require('gulp-gh-pages');

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'js', 'modernizr', 'imgComp', 'HTMLmini', 'CombineJS'], function() {

  browserSync.init({
    server: "./app"
  });
  gulp.watch("app/js/vendor/**/*.js", ['CombineJS']);
  gulp.watch("app/html-dev/*.html", ['HTMLmini']);
  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/js/vendor/*.js", ['js']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {

  return gulp.src("app/scss/*.scss")
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// Build the Modernizr JS
gulp.task('modernizr', function() {
  var settings = require('./node_modules/modernizr/lib/config-all.json');
  return gulp.src('app/js/*.js')
    .pipe(modernizr('modernizr.js', settings))
    .pipe(gulp.dest('node_modules/modernizr/'));
});

// Compress images
gulp.task('imgComp', function() {
  gulp.src('app/assets/image/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/assets/image'));
});

// Minify HTML
gulp.task('HTMLmini', function() {
  return gulp.src('app/html-dev/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

// Move the javascript files into the app/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js', 'node_modules/gsap/src/minified/TweenMax.min.js',
      'node_modules/gsap/src/minified/easing/EasePack.min.js', 'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'node_modules/fullpage.js/dist/jquery.fullpage.min.js',
      'node_modules/modernizr/modernizr.js'
    ])
    .pipe(gulp.dest("app/js/lib"))
    .pipe(browserSync.stream());
});

// Combine JS files
gulp.task('CombineJS', function() {
  return gulp.src("app/js/vendor/**/*.js")
    .pipe(order([
      "animation.js",
      "media.js"
    ]))
    .pipe(concat("app.js"))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.stream());
});

// Push build to gh-pages
gulp.task('deploy', function() {
  return gulp.src("./app/**/*")
    .pipe(deploy())
});

gulp.task('default', ['serve']);