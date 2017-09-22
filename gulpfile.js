var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
	console.log('Default Task');
});


// grab all .scss files (source) /app/scss
// run sass on them
// put css files in output dir (destination) /dist/css
// 


gulp.task('sassify', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('htmlify', function(){
	return gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
	
		stream: true
	}));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('watch', ['browserSync', 'sassify'], function(){
	gulp.watch('app/scss/**/*.scss', ['sassify']);
	gulp.watch('app/**/*.html', ['htmlify']);
});
