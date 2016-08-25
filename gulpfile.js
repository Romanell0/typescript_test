var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
    pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

// gulp.task('default', ['copyHtml'], function () {
//     // return browserify({
//     //     basedir: '.',
//     //     debug: true,
//     //     entries: ['src/main.ts'],
//     //     cache: {},
//     //     packageCache: {}
//     // })
//     return gulp.src(['src/**.ts'])
//     .pipe(typescript())
//     .pipe(concat('bundle.js'))
    
//     // .plugin(tsify)
//     // .transform("babelify")
//     // .bundle()
//     // .pipe(source('bundle.js'))
//     // .pipe(buffer())
//     // .pipe(sourcemaps.init({loadMaps: true}))
//     // .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('dist'));
// });

gulp.task("default",['copyHtml'], function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist"));
});