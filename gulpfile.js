var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("src/sass/styles.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest("src/css"));
});
