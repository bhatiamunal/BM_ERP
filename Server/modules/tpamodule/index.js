

"use strict";


// var CModule = require("./../../base/Module").CModule;
var ModCfg = require("./../../config/ModuleConfig");

function CTPAModule() {
    /*
     * Listen IP
     */
    this._ListenIp = "";
    /*
     * Listen Port
     */
    this._ListenPort = 0;
    /*
     * Rest API server instance
     */
    this._RestAPIServer = null;

    /*
     * Store map of Client ID with username
     */
    this._clientIDUsernameMap = {};

    /*
     * Store map of url and function
     */
    this._URLFuncMap = {};

   // CModule.call(this, ModCfg.TPAM);
   
}

// CTPAModule.prototype = Object.create(CModule.prototype);


require('./deinitiate')(CTPAModule);
require('./initiate')(CTPAModule);
require('./initiate_db')(CTPAModule);
require('./initiate_rest_api')(CTPAModule);
require('./read_config')(CTPAModule);
require('./initiate_url_handler')(CTPAModule);
require('./url_handler')(CTPAModule);



module.exports = CTPAModule;