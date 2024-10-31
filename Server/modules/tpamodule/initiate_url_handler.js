"use strict";

var DEFS = require("./../../def");

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.InitiateURLHandler = function () {

        /*
         * Initiate URL func Map 
         */
        /* Get Request */
        this._URLFuncMap['/alarms/fetch'] = { func: this.OnFetchAlarm, method: DEFS.HTTP_METHOD_TYPE.GET };
       

    };

};