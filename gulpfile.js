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
var yaml = require('gulp-yaml');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');

const ignorePug = [
	'!src/layouts/**',
	'!src/blocks/**',
	'!src/globals/**'
];

gulp.task('yaml', function(){
	return gulp.src('src/**/*.yml')
		.pipe(yaml())
		.pipe(gulp.dest('build/assets'))
});

// Basic configuration example
var config = {
	mode: {
		symbol: true // Activate the «symbol» mode
	}
};

gulp.task('sprites', function () {
	return gulp.src('src/assets/svg/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('build/assets/svg'))
});

gulp.task('html', function(){
	return gulp.src(['src/**/*.pug', ...ignorePug])
		.pipe(pug())
		.pipe(gulp.dest('build'))
});

// gulp.task('slick', function(){
// 	return gulp.src(['src/assets/libs/slick/slick/slick.min.js', 'src/assets/libs/slick/slick/slick.css', 'src/assets/libs/slick/slick/slick-theme.css'])
// 		.pipe(gulp.dest('build/assets/slick'))
// });

gulp.task('vendor:js', function () {
    return gulp.src('src/assets/libs/**/*.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('vendor:css', function () {
	return gulp.src('src/assets/libs/slick/*.css')
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('build/assets'));
});

gulp.task('sass', function () {
	return gulp.src('src/assets/**/*.sass')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gcmq())
		.pipe(gulp.dest('build/assets'))
		.pipe(browserSync.stream())
});

gulp.task('webpack', function () {
	return gulp.src('./src/assets/index.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./build/assets'))
		.pipe(browserSync.stream());
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./build"
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
	.pipe(gulp.dest('build/assets'))
});

gulp.task('clean', function() {
	return del('build');
});

gulp.task('build', gulp.parallel('html', 'sass', 'sprites', 'yaml', 'copy', 'vendor:js', 'vendor:css'));

gulp.task('start', gulp.parallel('webpack', 'watch', 'serve'));

gulp.task('default', gulp.series('clean', 'build', 'start'));