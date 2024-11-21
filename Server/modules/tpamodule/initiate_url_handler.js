"use strict";

var DEFS = require("./../../def");

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.InitiateURLHandler = function () {

        /*
         * Initiate URL func Map 
         */
        /* Get Request */
        this._URLFuncMap['/api/readConfig'] = { func: this.readConfig, method: DEFS.HTTP_METHOD_TYPE.GET };
        this._URLFuncMap['/api/insertAll'] = { func: this.insertAllDataOperation, method: DEFS.HTTP_METHOD_TYPE.POST };
        this._URLFuncMap['/api/appendData'] = { func: this.insertOperation, method: DEFS.HTTP_METHOD_TYPE.POST };
        this._URLFuncMap['/api/delete'] = { func: this.deleteOperation, method: DEFS.HTTP_METHOD_TYPE.POST };
        this._URLFuncMap['/api/update'] = { func: this.updateOperation, method: DEFS.HTTP_METHOD_TYPE.POST };
        this._URLFuncMap['/api/view'] = { func: this.viewOperation, method: DEFS.HTTP_METHOD_TYPE.POST };
        this._URLFuncMap['/api/viewById'] = { func: this.viewOperationUsingId, method: DEFS.HTTP_METHOD_TYPE.GET };
       

    };

};