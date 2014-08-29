var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rjs     = require('gulp-requirejs'),
    mocha   = require('gulp-mocha'),
    gutil   = require('gulp-util'),
    nodemon = require('gulp-nodemon');


gulp.task('rjs', function() {
    //run r.js
    rjs({
        baseUrl : "src/js",
        paths: {
            requireLib: "bower_components/requirejs/require"
        },
        findNestedDependencies : true,
        wrap: false,
        preserveLicenseComments: true,
        optimize: "none",
        /*optimize: "uglify2",*/
        findNestedDependencies: true,
        /*removeCombined: true,*/
        mainConfigFile: "src/js/require_main.js",
        include: "requireLib",
        out: "src/js/require_main_built.js"
    })
        .pipe(uglify(
            {
                beautify: true,
                ascii_only: true,
                compress: false
            }
        ))
        .pipe(gulp.dest('./'));

});

gulp.task('mocha', function(){
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha({reporter: 'dot'}))
            .on('error', gutil.log);
});

gulp.task('watch-mocha', function(){
    gulp.watch(['test/**'], ['mocha']);
});

gulp.task('server', function(){
    nodemon({script: 'server/server.js', ext: 'html tpl', ignore: []})
        .on('change', function(){
            console.log('nodemon change detected')
        })
        .on('restart', function(){
            console.log('nodemon restarted')
        })

});

//default for gulp command
gulp.task('default', ['server', 'watch-mocha']);

gulp.task('build', ['rjs']);