/**
 * Created by greg on 29/08/14.
 */

/**
 * An Application specific version of a Marionette.Controller
 *
 * Automates the fetching of a region by default
 * Declares show() and close() methods that perform clean-up
 *
 */
define(["backbone.marionette", "msgbus"], function(Marionette, msgBus){

    //var __slice = [].slice;

    var APPController = Marionette.Controller.extend({

        constructor: function(options){
            if (options == null) {
                options = {};
            }

            //this.region = options.region || msgBus.reqres.request("default:region");
            this.region = options.region || msgBus.request("default:region");

            //this.__super__.constructor.call(this,options);
            Marionette.Controller.prototype.constructor.apply(this, arguments);

        },

        close: function(){
            /*var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];*/
            delete this.region;
            delete this.options;

            //return this.__super__.close.call(this, args);
            return Marionette.Controller.prototype.close.apply(this, arguments);
        },

        show: function(view, options){
            if(options == null) {
                options = {};
            }

            _.defaults(options, {
                loading: false,
                region: this.region
            });

            this._setMainView(view);
            return this._manageView(view, options);
        },

        _setMainView: function(view){
            if(this._mainView){
                return;
            }
            this._mainView = view;
            return this.listenTo(view, "close", this.close);
        },

        _manageView: function(view, options){
            if(options.loading) {
                return msgBus.command("show:loading", view, options);
            }
            else {
                return options.region.show(view);
            }
        }
    });

    return APPController;
});