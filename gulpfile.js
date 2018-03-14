var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// Sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// watchタスク(**/*.scss変更時に実行するタスク)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('scss/**/*.scss', ['sass']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

// gulpのデフォルト動作としてsass-watchを実行
gulp.task('default', ['sass-watch']);
