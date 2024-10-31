
"use strict";

// var CModule = require("./../../base/Module").CModule;

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.DeInitiate = function () {
        CModule.prototype.DeInitiate.call(this);

        this._RestAPIServer.close();
        this._RestAPIServer = null;
    };

};