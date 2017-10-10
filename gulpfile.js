var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("./js/example.js").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
