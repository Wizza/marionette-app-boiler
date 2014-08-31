/* global describe, it, expect */
define(function(require) {

    var Another = require("entities/another");

    describe("Another", function () {

        describe("Something", function(){
            it("should tell us what something is", function(){

                var myExample = new Another("stuff");

                myExample.getSomething().should.equal("stuff");
            });

            it("should tell us nothing too");
            it("should tell us nothing too");
        });

    });

});