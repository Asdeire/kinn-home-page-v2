import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import sassLib from 'sass';  

const sass = gulpSass(sassLib);

const paths = {
  js: './src/js/**/*.js',
  scss: './src/scss/**/*.scss',
  images: './src/images/**/*',
  dist: './dist',
};

gulp.task('scripts', () => {
  return gulp.src(paths.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/js`));
});

gulp.task('styles', () => {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError)) 
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`));
});

gulp.task('images', () => {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(`${paths.dist}/images`));
});

gulp.task('build', gulp.series('scripts', 'styles', 'images'));

gulp.task('default', gulp.series('build'));
