
// var CModule = require("./../base/Module").CModule;
// var ModCfg = require("./../config/ModuleConfig");
var http = require('http');
// var express = require('express');
// var path = require('path');
// var app = express();
// var dop = require('dop');
// var DEFS = require('./../defs');
// var TABLE_SCHEMA = require('./../config/TableSchema');
function CIVAModule() {
    // this._PublicHtmlDir = "";
    // this._DefFile = "";
    // this._ServerListenPort = 0;
    // this._ServerListenIp = "";
    
    // this._Server = null;
    // this._dopListner = null;
    this.Initiate()
    //CModule.call(this, ModCfg.IVAM,1000);
}
// CIVAModule.prototype = Object.create(CModule.prototype);
// /**
//  * This method read module specific configuration from Config File.
//  *
//  * @protected
//  * @method ReadModuleConfig
//  * @param CfgObj {Object} Module configuration Object
//  */
// CIVAModule.prototype.ReadModuleConfig = function (CfgObj) {

//     this._PublicHtmlDir = this.GetInstallationPath(DEFS.INS_PATH.IVA_CONFIGURATOR_PUBLIC_HTML_PATH);
//     console.log("ReadModuleConfig in IVAModule")

//     if (global.__debug == true) {
//        //this._PublicHtmlDir = "D:\\Mb\\practice\\demo_hc_1\\code\\client\\myApp\\src";
//       this._PublicHtmlDir = "D:\\Mb\\practice\\demo_hc_1\\code\\client\\WS";
//       //this._PublicHtmlDir = "D:\\Mb\\practice\\demo_hc_1\\code\\client\\basic";
//     }
//     console.log( this._PublicHtmlDir)
//     this._DefFile = DEFS.INS_PATH.IVA_CONFIGURATOR_DEF_FILE;
//     this._ServerListenPort = CfgObj.configurator.host_port;
  
//     this._ServerListenIp = CfgObj.configurator.host_ip;
   
// };

CIVAModule.prototype.Initiate = function () {
    // Import express
    const express = require('express');

    // Create an instance of express
    const app = express();

    // Define a route
    app.get('/', (req, res) => {
        res.send('Hello, World from Express!');
    });

    // Define the port
    const PORT = process.env.PORT || 3000;

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
// CIVAModule.prototype.InitiateDB = async function (cb) {


//     /* Reading location */
//     var JSQLIVAInfoObj = TABLE_SCHEMA.GetSystemConfigJSQLObj(DEFS.SYS_SETTING.LOCATION_TYPE);

//     try {
//         Result = await this.ExecuteQueryPromise(JSQLIVAInfoObj);
//     } catch (err) {
//        // this.Trap(`Fail to read ${DEFS.SYS_SETTING.LOCATION_TYPE}`);
//         cb(err);
//         return;
//     }

//     this.Trace(`Fetching DEFS.SYS_SETTING.LOCATION_TYPE success`, DEFS.TRACE_TYPE.SUCCESS);

//     var Msg = Result.Msg;
//     if (Msg.colAffected) {
//         this._LocationType = parseInt(Msg.rows[0][0]);
//     }

//     console.log(this._LocationType);

//     cb();

// };
// require('./WSMethod/RegisterDOPComponents')(CIVAModule);
module.exports = CIVAModule;