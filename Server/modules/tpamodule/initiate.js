"use strict";

// var CModule = require("./../../base/Module").CModule;
var BODY_PARSER = require('body-parser');
var express = require('express');
const cors = require('cors');
var tpaAPP = express();
// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
    origin: 'http://localhost:8080', // Allow only requests from this origin
    methods: 'GET,POST', // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

// Use CORS middleware with specified options
tpaAPP.use(cors(corsOptions));
// var HTTP = require('http');

tpaAPP.use(BODY_PARSER.urlencoded({
    parameterLimit: 100000000,
    limit: '50mb',
    extended: true
}));

//tpaAPP.use(express.limit(100000000));

//tpaAPP.use(BODY_PARSER.json());

tpaAPP.use(BODY_PARSER.json({ limit: '50mb' }));
//tpaAPP.use(BODY_PARSER.urlencoded({limit: '50mb'}));


// tpaAPP.use(function (req, res, next) {
//     console.log(req.url + ' ' + req.method) // populated!
//     next()
// })

exports = module.exports = function (CTPAModule) {

    CTPAModule.prototype.Initiate = function () {
      //  CModule.prototype.Initiate.call(this);

        // tpaAPP.set('json spaces', 1);
        /* Function to initiate web server instance */
        this.InitiateServerInstance(tpaAPP);

        this.InitiateURLHandler();

        this.InitiateRestAPI(tpaAPP);
    };

    CTPAModule.prototype.InitiateServerInstance = function (tpaAPP) {
        tpaAPP.listen(5500,()=>{
            console.log(`listen on ${5500}`)
        })
        // this._RestAPIServer = HTTP.createServer(tpaAPP);
        // this._RestAPIServer.listen(this._ListenPort, this._ListenIp);

    };
};