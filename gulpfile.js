var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();

var sassSrc = 'app/scss/**/*.scss';
var htmlSrc = 'app/**/*.html';

gulp.task('default', function(){
	console.log('Default Task');
});


// grab all .scss files (source) /app/scss
// run sass on them
// put css files in output dir (destination) /dist/css
// 


gulp.task('sassify', function(){
	return gulp.src(sassSrc)
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('htmlify', function(){
	return gulp.src(htmlSrc)
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
	
		stream: true
	}));
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	});
});

gulp.task('watch', ['browserSync', 'sassify'], function(){
	gulp.watch(sassSrc, ['sassify']);
	gulp.watch(htmlSrc, ['htmlify']);
});
