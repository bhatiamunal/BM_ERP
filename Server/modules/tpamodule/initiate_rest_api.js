"use strict";

var DEFS = require("./../../def");

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.InitiateRestAPI = function (instExpress) {
        var thatObj = this;

        Object.keys(this._URLFuncMap).forEach(function (URL) {
            var URLFuncObj = thatObj._URLFuncMap[URL];

            switch (URLFuncObj.method) {
                case DEFS.HTTP_METHOD_TYPE.GET:
                    {
                        instExpress.get(URL, function (req, res) {
                            URLFuncObj.func.call(thatObj, req, res, URLFuncObj.url_config);
                        });
                        break;
                    }
                case DEFS.HTTP_METHOD_TYPE.POST:
                    {
                        instExpress.post(URL, function (req, res) {
                            URLFuncObj.func.call(thatObj, req, res, URLFuncObj.url_config);
                        });
                        break;
                    }
            }
        });
    };
};