const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

gulp.task('default', () => {
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
  gulp.watch('*.php').on('change', () => {
    browserSync.reload();
  });
});