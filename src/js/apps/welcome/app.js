/**
 * Created by greg on 27/08/14.
 */


define(["msgbus", "backbone.marionette", "apps/welcome/show/controller"], function (msgBus, Marionette, Controller) {

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            "welcome": "show"
            //"welcome/other": "other
        }
    });

    var API = {
        show: function(){
            new Controller()
        }
    };

    //msgBus.commands.setHandler("start:welcome:app", function(){
    msgBus.comply("start:welcome:app", function(){
        console.log("start:welcome:app");
        return new Router({
            controller: API
        });
    });

    /*msgBus.commands.setHandler("welcome:show", function(){
        API.show();
    });*/

    return;

});