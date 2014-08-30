/**
 * Created by greg on 27/08/14.
 */

/**
 * Initialize point
 * - load require configuration
 * - loads App configuration
 * - loads App object
 * - calls start() on Marionettte.Application object
 */
require(["require_config", "config/load", "app"], function(_config, _load, APP){
    console.log("app init");
    return APP.start();
});