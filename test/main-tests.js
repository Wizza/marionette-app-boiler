/* global mocha */
require(["../src/js/require_config"], function () {

    require.config({
        baseUrl: "../src/js",
        paths: {
            chai: "bower_components/chai/chai"
        }
    });

    require([
        "chai"
    ], function (chai) {
        chai.should();
        window.expect = chai.expect;
        mocha.setup("bdd");

        require([
            "specs.js"
        ], function () {
            mocha.run();
        });
    });

});