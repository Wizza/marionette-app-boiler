/**
 * Created by greg on 28/08/14.
 */

define(["backbone", "backbone.marionette"], function(Backbone, Marionette){
    return _.extend(Marionette.Application.prototype, {
        navigate: function (route, options) {
            if (options == null) {
                options = {};
            }
            if (route.charAt(0) === "/") {
                route = "#" + route;
            }
            return Backbone.history.navigate(route, options);
        },
        getCurrentRoute: function () {
            var frag;
            frag = Backbone.history.fragment;
            if (_.isEmpty(frag)) {
                return null;
            } else {
                return frag;
            }
        }
    });
});