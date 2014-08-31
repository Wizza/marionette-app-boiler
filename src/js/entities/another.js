/**
 * Created by greg on 1/09/14.
 */

define([
    // Any required modules
], function () {

    /**
     * Defines the Another constructor
     * @constructor Another
     * @param {string} something - Just some string
     */
    var Another = function (something) {
        this.something = something || false;
    };

    /**
     * Returns the value of property `something`
     * @method getSomething
     * @returns {string|boolean}
     */
    Another.prototype.getSomething = function () {
        return this.something;
    };

    return Another;

});
