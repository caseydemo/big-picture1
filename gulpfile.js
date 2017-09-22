var gulp = require ('gulp');
var sass = require ('gulp-sass');

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
	.pipe(gulp.dest('dist/css'));
});