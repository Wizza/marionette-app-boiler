/**
 * Created by greg on 1/09/14.
 */

define([
    // Any required modules
    'backbone'
], function (Backbone) {

    /**
     * Defines the Another constructor
     * @constructor Another
     * @param {string} something - Just some string
     */
    /*var Another = function (something) {
        this.something = something || false;
    };*/

    var Another = Backbone.Model.extend({
        initialize: function(){
            this.something = 'stuff';
        },
        getSomething: function() {
            return this.something;
        },
        getElse: function(){
            return 'else';
        }
    });



    /**
     * Returns the value of property `something`
     * @method getSomething
     * @returns {string|boolean}
     */
    /*Another.prototype.getSomething = function () {
        return this.something;
    };*/

    return Another;

});
