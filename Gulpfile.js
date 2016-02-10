var gulp = require("gulp");
var babel = require("gulp-babel");
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {
  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);

  // Reload renderer process
  gulp.watch(['dist/bundle.js', 'dist/index.html'], electron.reload);
});
