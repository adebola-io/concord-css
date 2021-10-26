const gulpConcat = require("gulp-concat");
const gulp = require("gulp");

var jsFiles = 'src/js/vanilla/**.js', jsDest = 'dist/js/'
gulp.task('scripts', function () {
    return gulp.src(jsFiles).pipe(gulpConcat('combined.js')).pipe(gulp.dest(jsDest));
});