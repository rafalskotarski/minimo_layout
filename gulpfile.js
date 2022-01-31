"use strict";

const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const del = require("del");
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("src/sass/styles.scss")
    .pipe(
      sass({
        precision: 10,
        includePaths: ["."],
        onError: console.error.bind(console, "Sass error:"),
      })
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("html", () => {
  return gulp
    .src("src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespaces: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task("clean", () => del(["dist"]));

gulp.task("build", gulp.series("clean", gulp.parallel("sass", "html")));

gulp.task("watch", (done) => {
  gulp.watch(
    ["src/*.html", "src/sass/*.scss", "src/sass/**/*.scss"],
    gulp.series("build")
  );
  done();
});
