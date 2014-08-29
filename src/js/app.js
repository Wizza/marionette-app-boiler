/**
 * Created by greg on 27/08/14.
 */

define(["backbone", "backbone.marionette", "msgbus", "apps/load"], function (Backbone, Marionette, msgBus) {

    // Instantiate the Application
    var APP = new Marionette.Application();

    // Default Application route i.e. which SubApp is considered Root
    APP.rootRoute = "welcome";

    APP.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main"
        /*,
         dialogRegion: Marionette.Region.Dialog.extend({
         el: "#dialog-region"
         })*/
    });

    /**
     * Request handlers for Content Regions in index.html
     */
    msgBus.reply('main:region', function(){return APP.mainRegion;});
    msgBus.reply('default:region', function(){return APP.mainRegion;});


    /**
     * Start SubApps here via msgBus
     * e.g. msgBus.commands.execute("start:subapp:app");
     */
    APP.addInitializer(function(){
        /*msgBus.commands.execute("start:welcome:app");*/
        msgBus.command('start:welcome:app');

    });

    /**
     * On Start event
     * - this kicks things into life
     * and routes the request to the root location
     * within the App
     */
    APP.on("start", function () {
        console.log("app on start");
        if (Backbone.history) {

            Backbone.history.start();

            if (APP.getCurrentRoute() === null) {
                console.log("app start directed to root route");
                return this.navigate(this.rootRoute, {trigger:true});
            }

        }
    });

    return APP;
});
