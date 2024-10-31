
"use strict";

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.ReadModuleConfig = function (CfgObj) {
        this._ListenPort = CfgObj.tpam.host_port;
        this._ListenIp = CfgObj.tpam.host_ip;
    };
}