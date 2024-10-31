"use strict";


// var JSQL = require("./../../base/JSQL").JSQL;
// var DataFormat = require("./../../function/DataFormat");
// var TABLE = require("./../../config/TableSchema").TABLE;

exports = module.exports = function (CTPAModule) {

    // CTPAModule.prototype.InitiateDB = function (cb) {
    //     var JSQLObj = new JSQL();
    //     JSQLObj.from(TABLE.USER_TABLE.name);
    //     var thatObj = this;

    //     JSQLObj.select([
    //         TABLE.USER_TABLE.columns.ID.name,
    //         TABLE.USER_TABLE.columns.UNAME.name
    //     ]);

    //     this.ExecuteQuery(JSQLObj, function (result) {
    //         if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
    //             cb(result);
    //         }
    //         else {
    //             result.Msg.rows.forEach(function (row) {
    //                 thatObj._clientIDUsernameMap[row[0]] = row[1];
    //             });
    //         }
    //     });

    //     var JSQLExternObj = new JSQL();
    //     JSQLExternObj.from(TABLE.USER_TABLE_EXTERN.name);

    //     JSQLExternObj.select([
    //         TABLE.USER_TABLE_EXTERN.columns.ID.name,
    //         TABLE.USER_TABLE_EXTERN.columns.UNAME.name
    //     ]);

    //     this.ExecuteQuery(JSQLExternObj, function (result) {
    //         if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
    //             cb(result);
    //         }
    //         else {
    //             result.Msg.rows.forEach(function (row) {
    //                 thatObj._clientIDUsernameMap[row[0]] = row[1];
    //             });
    //             cb();
    //         }
    //     });
    // };
};