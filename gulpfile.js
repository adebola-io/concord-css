const gulpConcat = require("gulp-concat");
const gulp = require("gulp");

var jsFiles = 'src/ts/**', jsDest = 'src/ts/final/'
gulp.task('scripts', function () {
    return gulp.src(jsFiles).pipe(gulpConcat('concord.app.ts', {overwrite: true})).pipe(gulp.dest(jsDest));
});