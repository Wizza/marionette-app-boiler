/**
 * Created by greg on 1/09/14.
 */


define(['backbone'], function(Backbone){

    var Other = Backbone.Model.extend({

        getName: function(){
            return 'my name is greg';
        }
    });

    return Other;
});