/**
 * Created by greg on 31/08/14.
 */


require.config({
    /*baseUrl: "./js/",*/
    paths: {
        jquery: "bower_components/jquery/dist/jquery",
        underscore: "bower_components/underscore/underscore",
        backbone: "bower_components/backbone/backbone",
        "backbone.babysitter": "bower_components/backbone.babysitter/backbone.babysitter",
        "backbone.radio": "bower_components/backbone.radio/build/backbone.radio",
        "backbone.marionette": "bower_components/backbone.marionette/lib/backbone.marionette",
        tpl: "bower_components/requirejs-tpl/tpl",
        'radio.shim': "bower_components/48afb443b8c8c6ee4f46/radio.shim"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        backbone: {
            deps: [
                "jquery",
                "underscore"
            ],
            exports: "Backbone"
        },
        "backbone.marionette": {
            deps: [
                "backbone"
            ],
            exports: "Marionette"
        }
    }
});