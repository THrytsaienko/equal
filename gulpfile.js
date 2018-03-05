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

const ignorePug = [
	'!src/layouts/**',
	'!src/blocks/**',
	'!src/globals/**'
];

gulp.task('yaml', function(){
	return gulp.src('src/**/*.yml')
		.pipe(yaml())
		.pipe(gulp.dest('build/assets'))
})

// Basic configuration example
var config = {
	mode: {
		symbol: true // Activate the «symbol» mode
	}
};

gulp.task('sprites', function () {
	return gulp.src('src/assets/svg/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('build/assets/svg'));
});

gulp.task('html', function(){
	return gulp.src(['src/**/*.pug', ...ignorePug])
		.pipe(pug())
		.pipe(gulp.dest('build'))
});

gulp.task('js', function () {
	return gulp.src('src/**/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/assets'));
});

gulp.task('sass', function () {
	return gulp.src('src/assets/**/*.sass')
	    .pipe(sass())
		.pipe(postcss(processors))
		.pipe(gcmq())
	    .pipe(gulp.dest('build/assets'))
		.pipe(browserSync.stream())
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
	gulp.watch('src/**/*.js', gulp.series('js', reload));
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

gulp.task('build', gulp.parallel('html', 'sass', 'yaml', 'js', 'sprites', 'js', 'copy'));
gulp.task('start', gulp.parallel('watch', 'serve'));

gulp.task('default', gulp.series('clean', 'build', 'start'));






