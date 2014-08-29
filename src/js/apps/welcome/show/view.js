/**
 * Created by greg on 28/08/14.
 */


define(["apps/welcome/show/templates", "backbone.marionette"], function(Templates, Marionette){

    var Views = {};

    Views.show = Marionette.ItemView.extend({
        template: Templates.show
    });

    return Views;
});