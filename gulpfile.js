var gulp = require('gulp');
var pug = require('gulp-pug');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var svgSprite = require('gulp-svg-sprite');
var processors = [
	autoprefixer({browsers: ['last 2 version']})
];
var concat = require('gulp-concat');
var webpack = require('webpack-stream');

const ignorePug = [
	'!src/layouts/**',
	'!src/blocks/**',
	'!src/globals/**'
];

// Basic configuration example
var config = {
	mode: {
		symbol: true // Activate the «symbol» mode
	}
};

gulp.task('sprites', function () {
	return gulp.src('src/assets/svg/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('docs/assets/svg'))
});

gulp.task('html', function(){
	return gulp.src(['src/**/*.pug', ...ignorePug])
		.pipe(pug())
		.pipe(gulp.dest('docs'))
});

gulp.task('vendor:js', function () {
    return gulp.src('src/assets/libs/**/*.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('docs/assets'));
});

gulp.task('vendor:css', function () {
	return gulp.src('src/assets/libs/**/*.css')
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('docs/assets'));
});

gulp.task('sass', function () {
	return gulp.src('src/assets/**/*.sass')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gcmq())
		.pipe(gulp.dest('docs/assets'))
		.pipe(browserSync.stream())
});

gulp.task('webpack', function () {
	return gulp.src('./src/assets/index.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./docs/assets'))
		.pipe(browserSync.stream());
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./docs"
		}
	});
});

var reload = function(done){
	browserSync.reload();
	done();
}

gulp.task('watch', function() {
	gulp.watch('src/**/*.pug', gulp.series('html', reload));
	gulp.watch('src/**/*.sass', gulp.series('sass'));
});

gulp.task('copy', function(){
	return gulp.src([
			'src/assets/**/*.{jpg,png,jpeg,gif}'
		])
		.pipe(gulp.dest('docs/assets'))
});

gulp.task('clean', function() {
	return del('docs');
});

gulp.task('build', gulp.parallel('html', 'sass', 'sprites', 'copy', 'vendor:js', 'vendor:css'));

gulp.task('start', gulp.parallel('webpack', 'watch', 'serve'));

gulp.task('default', gulp.series('clean', 'build', 'start'));