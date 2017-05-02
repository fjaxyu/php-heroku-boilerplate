const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');
const gutil = require('gulp-util');
const rename = require('gulp-rename');

//css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

//babel + browserify
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');


gulp.task('default', ['sass', 'babel'], () => {
  connect.server({}, () => {
    browserSync({
      proxy: '127.0.0.1:8000/web',
      notify: {
        styles: {
          top: 'auto',
          bottom: '0',
          opacity: '1'
        }
      }
    });
  });
  gulp.watch('./web/*.php').on('change', browserSync.reload);
  gulp.watch("./web/*.html").on('change', browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/*.js', ['babel']);
});

gulp.task('sass', () => {
    const plugins = [autoprefixer({browsers: ['last 2 versions']}), cssnano()];
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./web/public/css'))
        .pipe(browserSync.stream());
});


gulp.task('babel', function() {
    browserify({
        entries: './src/js/main.js',
        debug: true
    })
    .transform(babelify, { presets: ['env'] })
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/public/js'))
    .pipe(browserSync.stream());
});