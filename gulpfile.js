var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rjs     = require('gulp-requirejs'),
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
gulp.task('default', ['server']);

gulp.task('build', ['rjs']);