/**
 * Created by greg on 27/08/14.
 */

/**
 * Global Messaging Bus to decouple Modules
 * yet allow each to register interest/deliver changes to
 * other modules
 *
 * Change to use Backbone.Radio soon
 */
define(["backbone.radio"], function (Radio) {
    /*return {
        reqres: new Wreqr.RequestResponse(),
        commands: new Wreqr.Commands(),
        events: new Wreqr.EventAggregator()
    };*/

    return Radio.channel('global');
});