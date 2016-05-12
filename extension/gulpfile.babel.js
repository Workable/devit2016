import gulp            from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify      from 'browserify';
import babelify        from 'babelify';
import aliasify        from 'aliasify';
import del             from 'del';
import runSequence     from 'run-sequence';
import path            from 'path';
import source          from 'vinyl-source-stream';

const $ = gulpLoadPlugins();

// Utils
function parsePathfile(pathfile) {
  return path.parse(pathfile);
}

function bundle(input, output) {
  input = parsePathfile(input);
  output = parsePathfile(output);

  const b = browserify({
    entries: [path.join(input.dir, input.base)],
    transform: [babelify, aliasify],
    fullPaths: true
  });

  return b.bundle()
    .pipe(source(output.base))
    .pipe(gulp.dest(output.dir));
}

// Clean
gulp.task('clean', (cb) => {
  del(['app/scripts/background_bundle.js', 'app/scripts/content_bundle.js']);
  cb();
});

// Build
gulp.task('build', (cb) => {
  runSequence(['build:background', 'build:content', 'build:css'], cb);
});

gulp.task('build:background', () => {
  return bundle('src/scripts/background.js', 'app/scripts/background_bundle.js');
});

gulp.task('build:content', () => {
  return bundle('src/scripts/content.js', 'app/scripts/content_bundle.js');
});

gulp.task('build:css', () => {
  return gulp.src('src/styles/main.scss')
    .pipe($.sass({ includePaths: ['src/styles'] }).on('error', $.sass.logError))
    .pipe($.concat('main.css'))
    .pipe(gulp.dest('app/styles'));
});

// Watch
gulp.task('watch', ['build'], () => {
  $.livereload.listen();

  gulp.watch([
    'app/scripts/**/*.js',
    'app/images/**/*',
    'app/styles/**/*',
    'app/_locales/**/*.json'
  ], $.batch({ timeout: 500 }, (event, cb) => {
    event.on('data', $.livereload.reload);
    cb();
  }));

  gulp.watch([
    'src/scripts/**/*.js',
    'src/styles/**/*.scss'
  ], ['build']);
});

// Default
gulp.task('default', ['watch']);
