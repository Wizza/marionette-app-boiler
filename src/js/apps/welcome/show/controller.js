/**
 * Created by greg on 28/08/14.
 */

define(["msgbus", "apps/welcome/show/view", "common/controller"], function(msgBus, Views, APPController){

    var controller = APPController.extend({

        initialize: function(){
            // call the show() method by default
            var view = new Views.show();
            return this.show(view);
        }
    });

    return controller;
});