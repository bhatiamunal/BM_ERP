// var Redis = require("redis");
// var DEFS = require("./../defs");
// var UTIL = require("./../function/Util");
// var ModuleConfig = require("./../config/ModuleConfig");
// var DataFormat = require("./../function/DataFormat");
// var FS = require('fs');
// var INI = require('ini');
// var cp = require("child_process");
// var SubscriberConfig = require("./../config/SubscriberConfig");
// var JSQL = require('./JSQL').JSQL;
// var moment = require('moment');
// var NET = require('net');

var iIndex = 998;

var PROCESS_EXIT_CODE = {
    EXCEPTION: ++iIndex,
    INIT_FAIL: ++iIndex,
    INSTANCE_ALREADY_RUNNING: ++iIndex,
    NORMAL_PROCESS_SHUTDOWN: ++iIndex
};
/**
 * This module define the base functionality of each module that exist in this system.
 * All the module in the system must be derived from this module.
 * Each module is subscribed for a channel through which he receive outer
 * world request and it also able to send messgae to outer world.
 * @class CModule
 * @constructor
 * @param ModuleObj {Object} Module Configuration Object
 * @param CyclicTime {Number} Time Interval when OnCyclicActivity get called in millisecond
 */
// function CModule(ModuleObj, CyclicTime) {
//     // /**
//     //  * Trace Flag: True-> Trace On, False-> Trace Off
//     //  * @private
//     //  * @property TraceFlag
//     //  * @default false
//     //  * @type boolean
//     //  */
//     // this._TraceFlag = false;
//     // /**
//     //  * Trace Level: Trace level is define bit wise, 0th bit high means TRACE_LEVEL.SUMMARY ...etc.
//     //  * @private
//     //  * @property TraceLevel
//     //  * @default 0
//     //  * @type TRACE_LEVEL
//     //  */
//     // this._TraceLevel = DEFS.TRACE_LVL_TYPE.TRACE_SUMMARY;
//     // /**
//     //  * Trace Type: Trace Type is define bit wise, 0th bit high means TRACE_TYPE.NORMAL
//     //  * @private
//     //  * @property TraceType
//     //  * @default 0
//     //  * @type TRACE_TYPE
//     //  */
//     // this._TraceType = DEFS.TRACE_TYPE.NORMAL;
//     // /**
//     //  * Store Module State
//     //  * @private
//     //  * @property ModuleState
//     //  * @default MODULE_STATE.UNKNOWN
//     //  * @type MODULE_STATE
//     //  */
//     // this._ModuleState = DEFS.MODULE_STATE.WAITING;
//     // /**
//     //  * Store Module name
//     //  * @private
//     //  * @property ModuleName
//     //  * @default ""
//     //  * @type String
//     //  */
//     // this._ModuleName = ModuleObj.name;
//     // /**
//     //  * Store Module Description
//     //  * @private
//     //  * @property ModuleDesc
//     //  * @default ""
//     //  * @type String
//     //  */
//     // this._ModuleDesc = ModuleObj.desc;
//     // /**
//     //  * Store Module Channel name on which moduel listen for reuqest
//     //  * @private
//     //  * @property ModuelChannelName
//     //  * @default ""
//     //  * @type String
//     //  */
//     // this._ModuleChannelName = ModuleObj.name;
//     // /**
//     //  * Store Module up time.
//     //  * @private
//     //  * @property ModuleUpTime
//     //  * @default ""
//     //  * @type time
//     //  */
//     // this._ModuelUpTime = 0;
//     // /**
//     //  * Redis client for data publishing.
//     //  * @private
//     //  * @property Publisher
//     //  * @default null
//     //  * @type Redis
//     //  */
//     // this._Publisher = null;
//     // /**
//     //  * Redis client for data publishing.
//     //  * @private
//     //  * @property Publisher
//     //  * @default null
//     //  * @type Redis
//     //  */
//     // this._Subscriber = null;
//     // /**
//     //  * Message Map: Message Map is used to link the request code with their
//     //  * corresponding method.
//     //  * @private
//     //  * @property MsgMap
//     //  * @default {}
//     //  * @type Map
//     //  */
//     // this._MsgMap = {};
//     // /**
//     //  * Store cyclic timer handle which call OnCyclicActivity on continous basis.
//     //  * @private
//     //  * @property CyclicTimerHandle
//     //  * @default 0
//     //  * @type Number
//     //  */
//     // this._CyclicTimerHandle = 0;
//     // /**
//     //  * Store time interval when OnCyclicActivity get call.
//     //  * @private
//     //  * @property CyclicTimer
//     //  * @default 5000
//     //  * @type Number
//     //  */
//     // this._CyclicTimer = CyclicTime || 5000;
//     // /**
//     //  * Store all the callback related to each request packet
//     //  * @private
//     //  * @property CallbackMap
//     //  * @default {}
//     //  * @type Object
//     //  */
//     // this._CallbackMap = {};
//     // /**
//     //  * Store counter of Message sequence code
//     //  * @private
//     //  * @property MsgSeqCode
//     //  * @default 0
//     //  * @type Number
//     //  */
//     // this._MsgSeqCode = 0;
//     // /**
//     //  * Callback timeout time.
//     //  * @private
//     //  * @property 
//     //  * @default 5000
//     //  * @type Number
//     //  */
//     // this._CbTimeOut = 1000 * 300; // 10 second

//     // /*
//     //  * DMM Map store the function map to call when any dmm notification come
//     //  */
//     // this._DMMNotificationMap = {};
//     // /*
//     //  * Store project path
//     //  * @private
//     //  * @property Project Path
//     //  * @type String 
//     //  */
//     // this._ProjectPath = "";

//     // /*
//     //  * If this variable set to true then it start dumping of all the trace into to log file
//     //  * this is used to debug the ems when it is not proper running
//     //  */
//     // this._DumpTrace = false;

//     // /*
//     //  * Every time OnCyclicActivity get called this counter is get incremented by 1.
//     //  * So for doing task that repeted every nth counter module would use this counter.
//     //  * Example:
//     //  * 
//     //  * // Get call on every 3rd counter
//     //  * if((this._CyclicActCounter % 3) === 0)
//     //  * {
//     //  *     // Do some work   
//     //  * }
//     //  * 
//     //  */
//     // this._CyclicActCounter = 0;

//     // /* This is used for the purpose of running module as single instance */
//     // this._NamedPipeServer = null;

//     // this._RedisPort = 6379;

//     // /**
//     //  * Constructor to Initiate class Object
//     //  */
//     // this.ReadConfig();
//     // this.InitiateMsgMap();
//     // this.InitiateDMMNotificationMap();
//     // this.InitiateIPC();
// }
// CModule.prototype.ReadConfig = function () {

//     /*
//      * If no project exist for the system then exit
//      */
//     var EMSConfig = this.GetEMSConfig();
//     console.log(EMSConfig);
//     if (!EMSConfig.Project.hasOwnProperty("project_path")) {
//         console.log("No Current project found to run");
//         process.exit(PROCESS_EXIT_CODE.INIT_FAIL);
//     }
//     else {
//         console.log(this._ModuleName + " started, Project Name:" + EMSConfig.Project.project_name + ", Project Path:" + EMSConfig.Project.project_path);
//     }

//     if (EMSConfig.Project.dump_trace) {
//         this._DumpTrace = true;
//     }

//     this.ReadModuleConfig(this.ReadIniFile(this.GetProjectPath(DEFS.DIR_PATH.MODULE_CONFIG())));
// };
// CModule.prototype.ReadIniFile = function (CfgPath) {
//     try {
//         return INI.parse(FS.readFileSync(CfgPath, 'utf-8'));
//     }
//     catch (err) {
//         console.log("Failed to read configuration file form " + CfgPath);
//         return null;
//     }
// };
// /**
//  * This method is used to initiate each module with following data:
//  * 1. Module Configuration
//  * 2. Cyclic Activity Callback
//  *
//  * @protected
//  * @method Initiate
//  */
// CModule.prototype.Initiate = function () {
//     //    var CfgPath = this.GetProjectPath(DEFS.DIR_PATH.MODULE_CONFIG(this._ModuleName));
//     //
//     //    var config = INI.parse(FS.readFileSync(CfgPath, 'utf-8'));
//     //    this.ReadModuleConfig(config);

//     var thatObj = this;
//     thatObj.Log("Initiate Call...");

//     thatObj.InitiateDB(function (err) {
//         err = (err == undefined) ? ({ msg: {} }) : err;
//         if (err.Msg instanceof DataFormat.RequestFailDataFormat) {
//             thatObj.Log("Unable to initiate module");
//             thatObj.Trace("Unable to initiate module, Error Code:" + err.FormData(), DEFS.TRACE_TYPE.DANGER);
//             process.exit(PROCESS_EXIT_CODE.INIT_FAIL);
//         }
//         else {
//             thatObj.Log("Module state set to running. Database Configuration readed successfully.");
//             // try {
//             //     throw new Error();
//             // }
//             // catch (err) {
//             //     thatObj.Log(JSON.stringify(err.stack));
//             // }
//             thatObj._ModuleState = DEFS.MODULE_STATE.RUNNING;


//             thatObj._CyclicTimerHandle = setInterval(function () {
//                 ++thatObj._CyclicActCounter;

//                 if (thatObj._CyclicActCounter > 9999999) {
//                     thatObj._CyclicActCounter = 0;
//                 }

//                 thatObj.OnCyclicActivity();
//             }, thatObj._CyclicTimer);
//         }
//     });
// };
// /**
//  * This method is used to deinitiate module with following data:
//  * 1. Cyclic Activity Callback
//  *
//  * @protected
//  * @method DeInitiate
//  */
// CModule.prototype.DeInitiate = function () {
//     this.Log("DeInitiate Call...");
//     /*
//      * Remove the cyclic timer 
//      */
//     clearInterval(this._CyclicTimerHandle);
//     this._CyclicActCounter = 0;
// };
// /**
//  * This method get called when the module is about to exit.
//  * from here we cannot stop the exit of module
//  * Here we release the mutex that is acquired for each module
//  *
//  * @protected
//  * @method OnExit
//  * @param Code {Number} Process Exit Code
//  */
// CModule.prototype.OnExit = function (Code) {
//     switch (Code) {
//         case PROCESS_EXIT_CODE.EXCEPTION:
//             {
//                 this.Log("Exception occur in module, Error Code:" + Code);
//                 break;
//             }
//         case PROCESS_EXIT_CODE.INIT_FAIL:
//             {
//                 this.Log("Module Initiate Fail, Error Code:" + Code);
//                 break;
//             }
//         case PROCESS_EXIT_CODE.INSTANCE_ALREADY_RUNNING:
//             {
//                 console.log("Module Initiate Fail, Another Instance already running:" + Code);
//                 this.Log("Module Initiate Fail, Another Instance already running:" + Code);
//                 break;
//             }
//         case PROCESS_EXIT_CODE.NORMAL_PROCESS_SHUTDOWN:
//             {
//                 console.log("Normal Process shutdown occur.");
//                 this.Log("Normal Process shutdown occur.");
//                 break;
//             }
//         default:
//             {
//                 this.Log("Module Exiting Normally, Error Code:" + Code);
//                 break;
//             }
//     }
//     this.Log(`Killing process with process ID , Error Code:${process.pid}`);
//     this.Log("Module: " + this._ModuleName + " Exiting, Code:" + Code);
//     //process.kill(process.pid, 'SIGTERM');
//     process.abort();
// };
// /**
//  * This method get called when the module has detected some exception while 
//  * processing.
//  *
//  * @protected
//  * @method OnException
//  * @param err {Object} Error Object
//  */
// CModule.prototype.OnException = function (err) {
//     console.log("Exception occur");
//     this.Log("Module Exception Occurs:" + JSON.stringify(err));
//     console.log(err);
//     setTimeout(function () {
//         process.exit(PROCESS_EXIT_CODE.EXCEPTION);
//     }, 3000);
// };
// /**
//  * This method is responsible for initializing Inter-process communication.
//  *
//  * @protected
//  * @method InitiateIPC
//  */
// CModule.prototype.InitiateIPC = function () {
//     this.Log("Initiate Module IPC...");
//     var thatObj = this;

//     process.on('exit', function (code) {
//         thatObj.OnExit(code);
//     });

//     process.on('uncaughtException', function (err) {
//         thatObj.OnException(JSON.stringify(err.stack.split("\n")));
//     });

//     this._Publisher = Redis.createClient({
//         port: this._RedisPort
//     });

//     var thatObj = this;

//     /*
//      * Trying to push message in same channel as of module and if the message is
//      *  successfully sent then another instance of this module is already running
//      */
//     var ReqPkt = this.GetPacket(DEFS.REQ_CODE_TYPE.MODULE_COMMON_HEALTH_CHECK, undefined, UTIL.GetDateAsNumber(), true, ++this._MsgSeqCode);
//     //    console.log('opub');
//     this._Publisher.publish(this._ModuleChannelName, ReqPkt.FormData(), function (err, result) {
//         // SSC
//         if (!result) {
//             // Checking named pipe running instance in Windows Power Shell.
//             // [System.IO.Directory]::GetFiles("\\.\\pipe\\") 
//             /* Here redis confirm that no two module is running. */
//             // Appending redis port to make name unique across system
//             var PIPE_PATH = "\\\\.\\pipe\\ems\\" + thatObj._ModuleChannelName + '_' + thatObj._RedisPort;

//             thatObj._NamedPipeServer = NET.createServer(function (stream) {
//                 console.log(`Named Pipe Server: on connection: ${PIPE_PATH}`);
//                 thatObj.Log(`Named Pipe Server: on connection: ${PIPE_PATH}`);
//             });

//             thatObj._NamedPipeServer.listen(PIPE_PATH, function () {
//                 console.log(`Named Pipe Server: on listening: ${PIPE_PATH}`);
//                 thatObj.Log(`Named Pipe Server: on listening: ${PIPE_PATH}`);
//             });

//             thatObj._NamedPipeServer.on('error', function () {
//                 console.log(`Named Pipe Server: error occured while listening: ${PIPE_PATH}`);
//                 thatObj.Log(`Named Pipe Server: error occured while listening: ${PIPE_PATH}`);
//                 // Fail to listen means some problem or some one listning of this pipe.
//                 process.exit(PROCESS_EXIT_CODE.INSTANCE_ALREADY_RUNNING);
//             });


//             thatObj._Subscriber.subscribe(thatObj._ModuleChannelName);
//             return;
//         }
//         process.exit(PROCESS_EXIT_CODE.INSTANCE_ALREADY_RUNNING);
//     });



//     this._Subscriber = Redis.createClient({
//         port: this._RedisPort
//     });

//     this._Subscriber.on("subscribe", function (channel, count) {
//         thatObj.Log("Module Successfully subscribed." + thatObj._ModuleDesc);
//         console.log("Module Successfully subscribed." + thatObj._ModuleDesc);

//         thatObj.Initiate();
//     });

//     /* Call back when some data is received on this channel */
//     this._Subscriber.on("message", function (channel, message) {
//         //        if (thatObj._ModuleState === DEFS.MODULE_STATE.WAITING) {
//         //            console.log("Unable to process message, Module state is waiting");
//         //            console.log(message);
//         //        } else {
//         //  console.log(message);
//         thatObj.OnMessage(message);
//         //        }

//     });

//     this._Subscriber.on("error", function (error, data) {
//         thatObj.Trap(`Error occured in subscriber channel ${error}, ${data}`);
//         console.log(error);
//         if (error != null) {
//             throw error;
//         }
//     });

//     this._Publisher.on("error", function (error, data) {
//         thatObj.Trap(`Error occured in subscriber channel ${error}, ${data}`);
//         console.log(error);
//         if (error != null) {
//             throw error;
//         }
//     });
// };
// /**
//  * This method is responsible for de-initializing Inter-process communication.
//  *
//  * @protected
//  * @method DeInitiateIPC
//  */
// CModule.prototype.DeInitiateIPC = function () {

//     this.Log("Deinitiate IPC Call...");
//     if (this._Publisher !== null) {
//         this._Publisher.quit();

//         this._Publisher = null;
//     }

//     if (this._Subscriber !== null) {
//         this._Subscriber.unsubscribe();
//         this._Subscriber.quit();

//         this._Subscriber = null;
//     }

//     /* Close Pipe instance */
//     if (this._NamedPipeServer != null) {
//         this._NamedPipeServer.close();
//         this._NamedPipeServer = null;
//     }
// };
// /**
//  * This method is responsible for de-initializing Inter-process communication.
//  *
//  * @protected
//  * @method InitiateDB
//  * @param cb {Function} Callback to call when data read form db
//  */
// CModule.prototype.InitiateDB = function (cb) {
//     // Success
//     cb();
// };
// /**
//  * This method is read module specific configuration that is related to this module.
//  *
//  * @protected
//  * @method ReadModuleConfig
//  * @param ConfigObj {Object} Configuration Object from Ini File
//  */
// CModule.prototype.ReadModuleConfig = function (ConfigObj) {
//     /* If redis port is defined in config file then used that else use the default one */
//     this._RedisPort = ConfigObj.redis_port || this._RedisPort;
// };
// /**
//  * This method initiate message map.
//  * Each derived class must derive this function to define its own message map or
//  * to override some message mapping functionality.
//  *
//  * @protected
//  * @method InitiateMsgMap
//  */
// CModule.prototype.InitiateMsgMap = function () {

//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_DUMP_STATE] = this.OnDumpState;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_HEALTH_CHECK] = this.OnHealthCheck;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_INIT] = this.OnInitiate;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_PAUSE] = this.OnPause;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_RUN] = this.OnResume;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_STOP] = this.OnStop;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_TRACE_CONFIG] = this.OnSetTraceCfg;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_GET_STATE] = this.OnStateCheck;
//     this._MsgMap[DEFS.REQ_CODE_TYPE.MODULE_COMMON_DMM_NOTIFICATION] = this.OnDMMNotification;


// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive Initiate request.
//  *
//  * @protected
//  * @method OnInitiate
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnInitiate = function (Msg) {

//     this._ModuleState = DEFS.MODULE_STATE.WAITING;
//     this.DeInitiate();
//     this.Initiate();

//     var szMsg = this._ModuleName + ": Reinitiate successfully";

//     this.Trace(szMsg, DEFS.TRACE_TYPE.SUCCESS);
// };
// /**
//  * This method initiate DMM notification map.
//  *
//  * @protected
//  * @method InitiateDMMNotificationMap
//  */
// CModule.prototype.InitiateDMMNotificationMap = function () {

//     //    this._DMMNotificationMap["TABLE_NAME"]["TABLE_ACTION_TYPE"] = this.OnMeterTableUpdate;

// };
// /**
//  * This callback get called when a new message is pushed to module. This method
//  * extract the message and called the linked message map for this type of request.
//  *
//  * @private
//  * @method OnMessage
//  * @param MsgRaw {String} Raw messgae in form of JSON string.
//  */
// CModule.prototype.OnMessage = function (MsgRaw) {
//     //  console.log(MsgRaw);

//     var MsgTgm = this.ExtractPacket(MsgRaw);
//     /*
//      * Check if we have already callback registered for this message the call cb function.
//      */
//     var cbKey = this.GetCBKey(MsgTgm.ModuleName, MsgTgm.MsgSeqCode, MsgTgm.MsgTime);
//     if (this._CallbackMap.hasOwnProperty(cbKey) && (MsgTgm.ModuleName != this._ModuleName)) {
//         this._CallbackMap[cbKey].callback(MsgTgm);
//         delete this._CallbackMap[cbKey];
//         return;
//     }
//     else if ((this._MsgMap[MsgTgm.ReqCode] instanceof Function) && MsgTgm.IsReqMsg) {
//         var thatObj = this;
//         /*
//          * Check if we have some data to sent to other module.
//          */
//         this._MsgMap[MsgTgm.ReqCode].call(this, MsgTgm, function (Msg) {
//             thatObj.SendMsg(MsgTgm.ModuleName, MsgTgm.ReqCode, Msg, MsgTgm.MsgTime, false, MsgTgm.MsgSeqCode);
//         });

//         //        if ((Msg != undefined) || (Msg == true))
//         //        {
//         //            if(Msg == true){
//         //                Msg = undefined;
//         //            }

//         //        }
//     }
//     else {
//         //this.Trap("Undefined message map.Msg: " + MsgRaw);
//         // Message came for either timeout packet or its not a request 
//         // silently discard the packet
//     }
// };
// /**
//  * Call this function to send trace.
//  *
//  * @public
//  * @method Trace
//  * @param TText {String} Trace to show in text.
//  * @param Type {TRACE_TYPE} Trace Type.
//  * @param Level {TRACE_LEVEL} Trace Level
//  */
// CModule.prototype.Trace = function (TText, Type, Level) {
// //    this._TraceFlag = true;
//     if (this._DumpTrace) {
//         this.Log(TText);
//     }

//     if (global.__debug) {
//         console.log(moment(UTIL.GetDateAsNumber()).format('YYYY-MM-DD HH:mm:ss.SSS') + '     ' + TText);
//     }


//     //this._TraceFlag = true;
//     Type = (Type === undefined) ? (DEFS.TRACE_TYPE.NORMAL) : Type;
//     Level = (Level === undefined) ? (DEFS.TRACE_LVL_TYPE.TRACE_SUMMARY) : Level;

//     /*
//      * Check if trace Flag is enable and required trace level is also set then
//      * generate trace.
//      */
//     if (/*true*/this._TraceFlag /*&& (this._TraceLevel & Level) && (this._TraceType & Type)*/) {
//         var Msg = new DataFormat.TraceDataFormat();

//         Msg.ModuleName = this._ModuleName;
//         Msg.TType = Type;
//         Msg.Time = UTIL.GetDateAsNumber();
//         Msg.TLevel = Level;
//         Msg.TText = TText;

//         this.SendMsg(ModuleConfig.TTM.name, DEFS.REQ_CODE_TYPE.MODULE_TTM_SEND_TRACE, Msg);
//         console.log(moment(UTIL.GetDateAsNumber()).format('YYYY-MM-DD HH:mm:ss.SSS') + '     ' + TText);
//     }
// };
// /** 
//  * Return is module is running on dump trace mode
//  * @public
//  * @method IsDumpTraceModeOn
//  */
// CModule.prototype.IsDumpTraceModeOn = function () {
//     return this._DumpTrace;
// };
// /**
//  * <b>Message Map Function</b> :This callback call when this module receive Trace
//  * message form other module.
//  *
//  * @protected
//  * @method OnTrace
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.Log = function (Msg) {

//     var Text = `${UTIL.GetDateAsDBDate((new Date()).getTime()).padEnd(30)} ${Msg} \r\n`;

//     var FPath = this.GetProjectPath(DEFS.DIR_PATH.LOG(this._ModuleName));
//     try {
//         /*
//          * Check if existing file.
//          * Calling in Sync mode for maintaining the order of log
//          */
//         FS.appendFileSync(FPath, Text);
//     }
//     catch (e) { }
// };
// /**
//  * This callback call when module receive State Check messsage form master module.
//  *
//  * @public
//  * @method Trap
//  * @param TText {String} Trap Text
//  */
// CModule.prototype.Trap = function (TText) {
//     var Msg = new DataFormat.TrapDataFormat();

//     Msg.ModuleName = this._ModuleName;
//     Msg.Time = UTIL.GetDateAsNumber();
//     Msg.TText = TText;

//     this.SendMsg(ModuleConfig.TTM.name, DEFS.REQ_CODE_TYPE.MODULE_TTM_SEND_TRAP, Msg);
// };
// /**
//  * Call this method to create new request data to send to other moduel.
//  *
//  * @private
//  * @method GetPacket
//  * @param ReqCode {Number} Request Code for message
//  * @param Msg    {Object} Message to send must be in form of Object, if undefined empty object {} is passed.
//  * @param MsgTime {Date}  Time when Message Telegram is form, if undefined then current time is used.
//  * @param IsReqMsg {Date}  if true we have request message type else response message type
//  * @param MsgSeqCode {Number}  Sequence code for message
//  * @uses RequestCode
//  * @return {String} JSON string of the complete message.
//  */
// CModule.prototype.GetPacket = function (ReqCode, Msg, MsgTime, IsReqMsg, MsgSeqCode) {
//     var MsgTgm = new DataFormat.MsgDataFormat();

//     MsgTgm.ReqCode = ReqCode;
//     MsgTgm.ModuleName = this._ModuleName;
//     MsgTgm.MsgTime = MsgTime;
//     MsgTgm.Msg = Msg;
//     MsgTgm.IsReqMsg = IsReqMsg;
//     MsgTgm.MsgSeqCode = MsgSeqCode;

//     return MsgTgm;
// };
// /**
//  * Use this method to send request to other module.
//  *
//  * @public
//  * @method SendMsg
//  * @param ModuleName {String} Module name to which message is send.
//  * @param ReqCode {Number} Request Code for message
//  * @param Msg    {Object} Message to send must be in form of Object, if undefined empty object {} is passed.
//  * @param MsgTime {Date}  Time when Message Telegram is form, if undefined then current time is used.
//  * @param IsReqMsg {Date}  if true we have request message type else response message type
//  * @param MsgSeqCode {Number}  Sequence code for message
//  */
// CModule.prototype.SendMsg = function (ModuleName, ReqCode, Msg, MsgTime, IsReqMsg, MsgSeqCode) {
//     var cb = null;

//     if (!this._Publisher) {
//         this.Log("IPC channel not initiated");
//         return;
//     }

//     /*
//      * Expected function callback is at Msg or MsgTime parameter
//      */
//     if (Msg instanceof Function) {
//         cb = Msg;
//         Msg = undefined;
//     }
//     else if (MsgTime instanceof Function) {
//         cb = MsgTime;
//         MsgTime = undefined;
//     }

//     IsReqMsg = (IsReqMsg !== undefined) ? IsReqMsg : true;
//     MsgSeqCode = (MsgSeqCode !== undefined) ? MsgSeqCode : ++this._MsgSeqCode;
//     MsgTime = (MsgTime !== undefined) ? MsgTime : UTIL.GetDateAsNumber();
//     Msg = (Msg !== undefined) ? Msg : undefined;

//     /*
//      * If we have request message and callback is provided then call that 
//      * callback when reply is avaliable.
//      * Following format of calling SendMsg when making request.
//      * SendMsg(ModName, ReqCode, function(result){});
//      * SendMsg(ModName, ReqCode, Msg, function(result){});
//      * 
//      */
//     var ReqPkt = this.GetPacket(ReqCode, Msg, MsgTime, IsReqMsg, MsgSeqCode);
//     var thatObj = this;

//     if (IsReqMsg && cb) {
//         thatObj._CallbackMap[thatObj.GetCBKey(ModuleName, MsgSeqCode, MsgTime)] = thatObj.GetCBObject(cb, MsgTime, ReqPkt);
//     }

//     this._Publisher.publish(ModuleName, ReqPkt.FormData(), function (err, result) {
//         if (IsReqMsg && cb) {
//             if (result) {
//                 /*
//                  * Message successfully sent to other module
//                  */
//             }
//             /* Unable to send message to other module: another module not running */
//             else {
//                 delete thatObj._CallbackMap[thatObj.GetCBKey(ModuleName, MsgSeqCode, MsgTime)];
//                 ReqPkt.Msg = new DataFormat.RequestFailDataFormat();
//                 ReqPkt.Msg.ErrorCode = DEFS.ERR_CODE.MODULE_NOT_RUNNING;
//                 cb(ReqPkt);
//             }
//         }
//     });
// };

// /**
//  * Generate unique key for each callback
//  *
//  * @private
//  * @method GetCBKey
//  * @param ModuleName {String} Module name to which message is send.
//  * @param MsgTime {Date}  Time when Message Telegram is form, if undefined then current time is used.
//  * @param MsgSeqCode {Number}  Sequence code for message
//  * @return {String} Unique callback key
//  */
// CModule.prototype.GetCBKey = function (ModuleName, MsgSeqCode, MsgTime) {
//     return ModuleName + MsgSeqCode + MsgTime;
// };
// /**
//  * Generate unique key for each callback
//  *
//  * @private
//  * @method GetCBKey
//  * @param cb {Callback}  callback function to call when response received
//  * @param MsgTime {Date}  Time when Message Telegram is form, if undefined then current time is used.
//  * @param ReqPkt {Object}  Packet that is requested.
//  * @return {Object} callback object
//  */
// CModule.prototype.GetCBObject = function (cb, MsgTime, ReqPkt) {
//     return { "callback": cb, "time": MsgTime, "ReqPkt": ReqPkt };
// };
// /**
//  * This method is used to Extract Packet.
//  *
//  * @private
//  * @method ExtractPacket
//  * @param MsgRaw {String} Raw message in form of JSON string
//  * @return {MsgFormat} Instance of MsgFormat
//  * @uses MsgFormat
//  */
// CModule.prototype.ExtractPacket = function (MsgRaw) {
//     var MsgTgm = new DataFormat.MsgDataFormat();
//     MsgTgm.ExtractData(MsgRaw);
//     return MsgTgm;
// };
// /**
//  * Call this method to access data from Database
//  *
//  * @protected
//  * @method ExecuteQueryPromise
//  * @param JSQLObj {JSQL.JSQL} JSQL Object
//  */
// CModule.prototype.ExecuteQueryPromise = function (JSQLObj) {
//     var thatObj = this;
//     return new Promise(function (resolve, reject) {

//         thatObj.ExecuteQuery(JSQLObj, function (result) {
//             if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//                 console.log("Reject:" + JSQLObj.get_query());
//                 reject(result);
//             }
//             else {
//                 // console.log("Resolve:" + JSQLObj.get_query());
//                 resolve(result);
//             }
//         });
//     });
// };

// /**
//  * Call this method to access data from Database
//  *
//  * @protected
//  * @method ExecuteQuery
//  * @param JSQLObj {JSQL.JSQL} JSQL Object
//  * @param cb {Function} Callback Function
//  */
// CModule.prototype.ExecuteQuery = function (JSQLObj, cb) {
//     var Msg = new DataFormat.JSQLQueryDataFormat();


//     Msg.action = JSQLObj.action;
//     Msg.col = JSQLObj.col;
//     Msg.condition = JSQLObj.condition;
//     Msg.where_col = JSQLObj.where_col;
//     Msg.table = JSQLObj.table;
//     Msg.transaction_name = JSQLObj.transaction_name;
//     Msg.orderBy = JSQLObj.orderBy;
//     Msg.LimitNumber = JSQLObj.LimitNumber;
//     Msg.OffsetNumber = JSQLObj.OffsetNumber;
//     Msg.SchemaName = JSQLObj.SchemaName;
//     Msg.SchemaUser = JSQLObj.SchemaUser;
//     Msg.WhereBracket = JSQLObj.WhereBracket;
//     // New properties for upsert functionality
//     Msg.unique_cols = JSQLObj.unique_cols;
//     Msg.update_col = JSQLObj.update_col;

//     this.SendMsg(ModuleConfig.DMM.name, DEFS.REQ_CODE_TYPE.MODULE_COMMON_GET_DB_DATA_REQ, Msg, cb);
// };
// /**
//  * Call this method to get the current project path.
//  *
//  * @protected
//  * @method GetProjectPath
//  * @param RelPath {String} Relative Path. If passed return full Project path with
//  *  relative path else only return Project path.
//  * @return {String} Current Project Path
//  */
// CModule.prototype.GetProjectPath = function (RelPath) {

//     /*
//      * @TODO: Read this from registry or Enviroment variable
//      */
//     RelPath = (RelPath === undefined) ? ("") : RelPath;

//     this._ProjectPath = (this._ProjectPath === undefined) ? "" : this._ProjectPath;
//     /*
//      * If project path not initialize
//      */
//     if (!this._ProjectPath.length) {
//         this._ProjectPath = this.GetEMSConfig().Project.project_path;
//     }
//     return this._ProjectPath + RelPath;
// };

// CModule.prototype.GetEMSConfig = function () {
//     var CfgPath = this.GetInstallationPath(DEFS.INS_PATH.CONFIG_FILE_PATH);
//     return this.ReadIniFile(CfgPath);
// };
// CModule.prototype.GetInstallationPath = function (RelPath) {
//     RelPath = (RelPath === undefined) ? ("") : RelPath;
//     return "C:\\EMS\\" + RelPath;
// };
// /**
//  * Call this method to generate alarm.
//  *
//  * @protected
//  * @method GenerateAlarm
//  * @param Text {String} Alarm Text
//  * @param ObjType {Number} Object Type UNKNOWN if not passed
//  * @param AlmType {Number} Alarm Type UNKNOWN if not passed
//  * @param AlmLvl {Number} Alarm Level NORMAL if not passed
//  * @param AlmParam {Object} Object Specific parameter empty object if not passed
//  * @param AlmTime {DateTime} Time when alarm is generate, current time if time not passed as argument.
//  */
// CModule.prototype.GenerateAlarm = function (Text, ObjType, AlmLvl, AlmType, AlmParam, AlmTime) {
//     var Msg = new DataFormat.AlarmGenDataFormat();

//     Msg.Text = Text;
//     Msg.ObjType = (ObjType === undefined) ? DEFS.OBJECT_TYPE.UNKNOWN : ObjType;
//     Msg.AlmType = (AlmType === undefined) ? DEFS.AE_TYPE.UNKNOWN : AlmType;
//     Msg.AlmParam = (AlmParam === undefined) ? DEFS.AE_PARAM.UNKNOWN() : AlmParam;
//     Msg.AlmLvl = (AlmLvl === undefined) ? DEFS.ALARM_LEVEL.INFORMATION : AlmLvl;
//     Msg.AlmTime = (AlmTime === undefined) ? UTIL.GetDateAsNumber() : AlmTime;

//     Msg.Time = UTIL.GetDateAsNumber();

//     var thatObj = this;
//     this.SendMsg(ModuleConfig.AEM.name, DEFS.REQ_CODE_TYPE.MODULE_COMMON_GENERATE_ALARM, Msg, function (result) {
//         if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//             thatObj.Trap("Unable to generate alarm. Module:" + thatObj._ModuleName + ", Alarm text: " + Text);
//         }
//     });
// };
// /**
//  * Call this method to generate Event.
//  *
//  * @protected
//  * @method GenerateEvent
//  * @param Text {String} Event Text
//  * @param EvtType {Number} Event Type UNKNOWN if not passed
//  * @param ObjType {Number} Object Type UNKNOWN if not passed
//  * @param EvtParam {Object} Object Specific parameter empty object if not passed
//  */
// CModule.prototype.GenerateEvent = function (Text, ObjType, EvtType, EvtParam) {
//     var Msg = new DataFormat.EventGenDataFormat();

//     Msg.Text = Text;
//     Msg.EvtParam = (EvtParam === undefined) ? {} : EvtParam;
//     Msg.EvtType = (EvtType === undefined) ? DEFS.AE_TYPE.UNKNOWN : EvtType;
//     Msg.ObjType = (ObjType === undefined) ? DEFS.OBJECT_TYPE.UNKNOWN : ObjType;
//     Msg.Time = UTIL.GetDateAsNumber();

//     var thatObj = this;
//     this.SendMsg(ModuleConfig.AEM.name, DEFS.REQ_CODE_TYPE.MODULE_COMMON_GENERATE_EVENT, Msg, function (result) {
//         if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//             thatObj.Trap("Unable to generate event. Module:" + thatObj._ModuleName + ", Event text: " + Text);
//         }
//     });
// };

// /**
//  * Call this method to Send Mail to preconfigured Mail Group
//  * 
//  * @protected
//  * @method SendMail
//  * @param MailUID {Integer} Mail UID Group ID
//  * @param Subject {String} Mail Subject
//  * @param Content {String} Mail Content
//  * @param AttachmentName {String} Attachment Name
//  * @param AttachmentPath {String} Attachment Path
//  */
// CModule.prototype.SendMail = async function (MailUID, Subject, Content, AttachmentName, AttachmentPath) {

//     MailUID = MailUID || -1;
//     Subject = Subject || 'Subject Unknown';
//     Content = Content || 'Content Unknonw';
//     AttachmentName = AttachmentName || '';
//     AttachmentPath = AttachmentPath || '';


//     var Msg = new DataFormat.SendMailDataFormat();
//     Msg.MailConfigUID = MailUID;
//     Msg.Subject = Subject;
//     Msg.Content = Content;
//     Msg.AttachmentName = AttachmentName;
//     Msg.AttachmentPath = AttachmentPath;

//     var thatObj = this;

//     return new Promise(function (resolve, reject) {

//         thatObj.SendMsg(ModuleConfig.MAILM.name, DEFS.REQ_CODE_TYPE.MODULE_MAILM_SEND_REPORT, Msg, function (result) {
//             if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//                 reject(result);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };


// /**
//  * Call this method to Send SMS to preconfigured Messager Group
//  * 
//  * @protected
//  * @method SendSMS
//  * @param SMSUID {Integer} SMS UID Group ID
//  * @param Subject {String} SMS Subject
//  * @param Content {String} SMS Content
//  * @param AttachmentName {String} Attachment Name
//  * @param AttachmentPath {String} Attachment Path
//  */
// CModule.prototype.SendSMS = async function (SMSUID, Subject, Content, AttachmentName, AttachmentPath) {

//     SMSUID = SMSUID || 1;
//     Subject = Subject || 'Subject Unknown';
//     Content = Content || 'Content Unknonw';
//     AttachmentName = AttachmentName || '';
//     AttachmentPath = AttachmentPath || '';



//     var Msg = new DataFormat.SendSMSDataFormat();
//     Msg.SMSConfigUID = SMSUID;
//     Msg.Subject = Subject;
//     Msg.Content = Content;
//     Msg.AttachmentName = AttachmentName;
//     Msg.AttachmentPath = AttachmentPath;

//     var thatObj = this;

//     return new Promise(function (resolve, reject) {

//         thatObj.SendMsg(ModuleConfig.SMSM.name, DEFS.REQ_CODE_TYPE.MODULE_SMSM_SEND_SMS, Msg, function (result) {
//             if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//                 reject(result);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// /**
//  * <b>Message Map Function</b> : This callback call when module receive pause messsage
//  * form master module.
//  *
//  * @protected
//  * @method OnPause
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnPause = function (Msg) {
//     this.Log("Pause Request Come, Current State: " + this._ModuleState);
//     if (this._ModuleState === DEFS.MODULE_STATE.RUNNING) {
//         this.DeInitiate();
//         this._ModuleState = DEFS.MODULE_STATE.PAUSED;

//         var szMsg = this._ModuleName + ": Paused successfully";

//         this.Trace(szMsg, DEFS.TRACE_TYPE.SUCCESS);
//         this.Log(szMsg);

//     }
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive resume messsage
//  * form master module.
//  *
//  * @protected
//  * @method OnResume
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnResume = function (Msg) {
//     this.Log("Resume Request Come, Current State: " + this._ModuleState);
//     if (this._ModuleState === DEFS.MODULE_STATE.PAUSED) {
//         this.Initiate();
//         this._ModuleState = DEFS.MODULE_STATE.RUNNING;

//         var szMsg = this._ModuleName + ": Resumed successfully";

//         this.Trace(szMsg, DEFS.TRACE_TYPE.SUCCESS);
//         this.Log(szMsg);
//     }
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive Stop messsage
//  * form master module.
//  *
//  * @protected
//  * @method OnStop
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnStop = function (Msg) {
//     console.log("Stop called");
//     this.Log("Stop Request Come, Current State: " + this._ModuleState);
//     this.StopModule();
// };
// CModule.prototype.StopModule = function () {
//     if ((this._ModuleState === DEFS.MODULE_STATE.PAUSED) || (this._ModuleState === DEFS.MODULE_STATE.RUNNING)) {

//         this.DeInitiate();
//         this.DeInitiateIPC();
//         this._ModuleState = DEFS.MODULE_STATE.STOPED;

//         var szMsg = this._ModuleName + ": Stoped successfully";
//         this.Log(szMsg);
//     }
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive State Check
//  * messsage form master module.
//  * Return the curret state of message when this request code is received
//  *
//  * @private
//  * @method OnStateCheck
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  * @param cb {Function} Call the function cb to send data to the requested module
//  */
// CModule.prototype.OnStateCheck = function (Msg, cb) {
//     var MsgTgm = new DataFormat.ModuleStateDataFormat();

//     MsgTgm.CPUUssage = process.cpuUsage();
//     MsgTgm.memoryUsage = process.memoryUsage();
//     MsgTgm.ModuleID = process.pid;
//     MsgTgm.ModuleUptime = process.uptime();
//     MsgTgm.Path = process.execPath;
//     MsgTgm.TraceFlag = this._TraceFlag;
//     MsgTgm.ModuleState = this._ModuleState;

//     cb(MsgTgm);
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive
//  * health check request.This method simply send a blank message of health
//  * check response.
//  *
//  * @private
//  * @method OnHealthCheck
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  * @param cb {Callback} cb to call to send response to the calling module
//  */
// CModule.prototype.OnHealthCheck = function (Msg, cb) {
//     cb();
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive Set Trace Config request.
//  *
//  * @private
//  * @method OnSetTraceCfg
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnSetTraceCfg = function (Msg) {
//     var Cfg = Msg.Msg;

//     this._TraceFlag = Cfg.TraceFlag;
//     this._TraceLevel = Cfg.TraceLevel;
//     this._TraceType = Cfg.TraceType;
// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive Cyclic activity request might be pushed
//  * by internal loop.
//  *
//  * @protected
//  * @method OnCyclicActivity
//  */
// CModule.prototype.OnCyclicActivity = function () {
//     /*
//      * Clear callback when timeout occur
//      */
//     var CurrTime = (new Date()).getTime();
//     var thatObj = this;
//     Object.keys(this._CallbackMap).forEach(function (Key) {
//         //console.log(Key)
//         /*
//          * If time exceeds then call the callback with error
//          */
//         if ((CurrTime - thatObj._CallbackMap[Key].time) >= thatObj._CbTimeOut) {
//             var ReqPkt = thatObj._CallbackMap[Key].ReqPkt;

//             ReqPkt.Msg = new DataFormat.RequestFailDataFormat();
//             ReqPkt.Msg.ErrorCode = DEFS.ERR_CODE.REQUEST_TIMEOUT;
//             thatObj.Trace("No Resp Receive for packet:" + JSON.stringify(ReqPkt), DEFS.TRACE_TYPE.WARNING);

//             thatObj._CallbackMap[Key].callback(ReqPkt);
//             thatObj.Trace(`${Key} packet timeout, Stop waiting for response`, DEFS.TRACE_TYPE.WARNING);
//             delete thatObj._CallbackMap[Key];
//         }
//     });
// };
// CModule.prototype.GetErrorObj = function (ErrorCode, ErrorObj) {

//     var RspData = new DataFormat.RequestFailDataFormat();
//     RspData.ErrorCode = ErrorCode;
//     RspData.ErrorObj = ErrorObj;
//     return RspData;

// };
// /**
//  * <b>Message Map Function</b> : This callback call when module receive dump state request.
//  *
//  * @private
//  * @method OnDumpState
//  * @param Msg {MsgFormat} Instance of MsgFormat
//  */
// CModule.prototype.OnDumpState = function (Msg) {

// };
// /**
// * <b>Message Map Function</b> : This callback call when module receive DMM data 
// * change notification.
// *
// * @protected
// * @method OnDMMNotification
// * @param Msg {MsgFormat} Instance of MsgFormat
// * @param cb {Function} Callback call when request complete
// */
// CModule.prototype.OnDMMNotification = function (Msg, cb) {
//     var Notify = Msg.Msg;
//     var Type = Notify.Action;
//     var Table = Notify.Table;


//     /*
//      * If derived module define callback for the table and type update then call that function
//      */
//     var PattTabName = SubscriberConfig.GetPatternTableName(Object.keys(this._DMMNotificationMap), Table);

//     if (PattTabName) {
//         if (this._DMMNotificationMap[PattTabName].hasOwnProperty(Type)) {
//             this._DMMNotificationMap[PattTabName][Type].call(this, Notify);
//         }
//     }
// };
// /**
//  * Execute the list of query with no response, if any error is coming in between then 
//  * execution of query will stop and cb function is called.
//  * Else cb function will call when all the query get executed
//  *
//  * @protected
//  * @method ExecuteBatch
//  * @param arrJSQL {Array} Array of JSQL Object
//  * @param cb {Function} Callback call when request complete
//  */
// CModule.prototype.ExecuteBatch = function (arrJSQL, cb) {
//     var thatObj = this;
//     var JSQLObj = arrJSQL.shift();

//     if (JSQLObj) {
//         this.ExecuteQuery(JSQLObj, function (result) {
//             if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//                 if (cb instanceof Function) {
//                     cb(result);
//                 }
//             }
//             else {
//                 thatObj.ExecuteBatch(arrJSQL, cb);
//             }
//         });
//     }
//     else {
//         if (cb instanceof Function) {
//             cb(UTIL.GetBlankObj());
//         }
//     }
// };
// /**
//  * Execute list of query as a single a single query by concat all the query in one.
//  * This is usable when you have to execute a bulk of query but doesnt bother about the response.
//  * 
//  * @protected
//  * @method ExecuteBatchAsOneQuery
//  * @param arrJSQL {Array} Array of JSQL Object
//  * @param cb {Function} Callback call when request complete 
//  */

// CModule.prototype.ExecuteBatchAsOneQuery = function (arrJSQL, cb) {
//     var szQuery = "";

//     arrJSQL.forEach(function (JSQLObj) {
//         szQuery += JSQLObj.get_query() + ';';
//     });

//     var JSQLObj = new JSQL();
//     JSQLObj.user_query(szQuery);

//     this.ExecuteQuery(JSQLObj, function (result) {
//         cb(result);
//     });
// };
// /**
//  * Execute list of query as a single a single query by concat all the query in one.
//  * This is usable when you have to execute a bulk of query but doesnt bother about the response.
//  * 
//  * @protected
//  * @method ExecuteBatchAsOneQueryPromise
//  * @param arrJSQL {Array} Array of JSQL Object
//  * @param cb {Function} Callback call when request complete 
//  */

// CModule.prototype.ExecuteBatchAsOneQueryPromise = async function (arrJSQL) {
//     var szQuery = "";

//     arrJSQL.forEach(function (JSQLObj) {
//         szQuery += JSQLObj.get_query() + ';';
//     });

//     var JSQLObj = new JSQL();
//     JSQLObj.user_query(szQuery);

//     var Res = null;

//     try {
//         Res = await this.ExecuteQueryPromise(JSQLObj);
//     }
//     catch (err) {
//         throw new Error(err);
//     }
//     return Res;
// };
// /*
//  * This function assumed to return unique transaction name through out the whole system.
//  * Uniqueness is checked by putting [Module Name]_[Current time in millisecond]_[some random number]
//  * @protected
//  * @method GetTransName
//  * @return void
//  */
// CModule.prototype.GetTransName = function (TransName) {
//     TransName = (TransName === undefined) ? "" : TransName;
//     return this._ModuleName + TransName + (new Date()).getTime() + (Math.floor(Math.random() * 10) + 1);
// };
// /**
//  // * <b>Message Map Function</b> : Call this function to execute a sequence of query 
//  // * and for each query you get result according to the index.
//  // * 
//  // * @example 
//  // * <pre>
//  //var arrJSQL = [];
//  //arrJSQL.push((new JSQL()).from('meter_info'));
//  //arrJSQL.push((new JSQL()).from('meter_inst'));
//  //arrJSQL.push((new JSQL()).from('meter_1_inst'));
//  //
//  //this.ExecuteBatchWithRsp(arrJSQL, function (result, Index) {
//  //    if (result.Msg instanceof DataFormat.RequestFailDataFormat) {
//  //        console.log("error");
//  //        return;
//  //    }
//  //
//  //    switch (Index)
//  //    {
//  //        case 1:
//  //        {
//  //            console.log("Query Successfully executed for Meter Info");
//  //            break;
//  //        }
//  //        case 2:
//  //        {
//  //            console.log("Query Successfully executed for Meter Inst");
//  //            break;
//  //        }
//  //        case 3:
//  //        {
//  //            console.log("Query Successfully executed for Meter 1 Inst");
//  //            break;
//  //        }
//  //    }
//  //});
//  * </pre>
//  *
//  * @protected
//  * @method OnDMMNotification
//  * @param arrJSQL {Array} Array of JSQL Object
//  * @param cb {Function} Callback call when request complete
//  * @param StopIfQryFail {Boolen} If this parameter is specified as true then this function stops
//  *                               when a query get fail is a batch.
//  * /
//  CModule.prototype.ExecuteBatchWithRsp = function (arrJSQL, cb, StopIfQryFail) {
//  var thatObj = this;
 
//  StopIfQryFail = (StopIfQryFail === undefined) ? false : StopIfQryFail;
 
//  var totElem = arrJSQL.length;
//  var iIndex = totElem - arrJSQL.length + 1;
//  var JSQLObj = arrJSQL.shift();
 
//  if (JSQLObj)
//  {
//  this.ExecuteQuery(JSQLObj, function (result) {
//  /* If query fail and user  * /
//  if (result instanceof DataFormat.RequestFailDataFormat) {
//  if (StopIfQryFail === true)
//  {
//  /* Empty the array and return to user * /
//  arrJSQL = [];
//  }
//  }
 
//  if (cb instanceof Function) {
//  cb(result, iIndex);
//  }
//  thatObj.ExecuteBatchWithRsp(arrJSQL, cb, StopIfQryFail);
 
//  });
//  }
//  };*/

// CModule.prototype.ExecuteBatchWithRsp = function (arrJSQL, cb, totElem) {
//     var thatObj = this;

//     if (totElem === undefined) {
//         totElem = arrJSQL.length;
//     }
//     var iIndex = totElem - arrJSQL.length + 1;
//     var JSQLObj = arrJSQL.shift();

//     if (JSQLObj) {
//         this.ExecuteQuery(JSQLObj, function (result) {
//             if (cb instanceof Function) {
//                 cb(result, iIndex);
//             }
//             thatObj.ExecuteBatchWithRsp(arrJSQL, cb, totElem);
//         });
//     }
// };

// module.exports.CModule = CModule;

// module.exports.StartModule = function (ModName) {

//     if (ModName === undefined) {
//         ModName = "";
//     }
//     var ModulesPath = __dirname + "./../debug.js";
//     cp.fork(ModulesPath, [ModName]);
//     /*
//      * Research between spawn and fork and exec node difference
//      */
//     //cp.spawn('node',[ModulesPath, ModName]);
// };
// module.exports.StartSpawn = function (ExePath, ExeParam, onExitCB, onDataCB, onErrDataCB, ExeOpt) {
    
//     if (ExeParam === undefined) {
//         ExeParam = [];
//     }
//     if (ExeOpt == undefined) {
//         ExeOpt = {};
//     }
//     var ExeImg = cp.spawn(ExePath, ExeParam, ExeOpt); // detached:true parameter put here 


//     ExeImg.on('exit', function (code) {
//         if (onExitCB instanceof Function) {
//             onExitCB(code);
//         }
//     });

//     ExeImg.stdout.on('data', function (data) {
//         if (onDataCB instanceof Function) {
//             onDataCB(data.toString());
//         }
//     });

//     ExeImg.stderr.on('data', function (data) {
//         if (onErrDataCB instanceof Function) {
//             onErrDataCB(data.toString());
//         }
//     });

//     return ExeImg;
// };
// module.exports.StartExe = function (ExeName, ExeParam, ExeTerminateCB) {
//     if (ExeParam === undefined) {
//         ExeParam = [];
//     }
//     cp.execFile(ExeName, ExeParam, function (error, stdout, stderr) {
//         if (ExeTerminateCB instanceof Function) {
//             ExeTerminateCB(error, stdout, stderr);
//         }
//     });
// };
// /*
//     added by Kamal on 03-07-2023
//     This is for executing imdisk.exe  and creating disk
// */
// module.exports.StartExec = function(ExeParam){
//     return new Promise(function (resolve, reject){

//         if(ExeParam === undefined){
//             ExeParam = [];
//         }
    
//         let ExeImg = cp.exec(ExeParam);
    
//         ExeImg.on('exit', function(code){
//             resolve(code);
//         })
//         ExeImg.on('error', function(){
//             reject();
//         })
//     })
// }

// module.exports.StartSpawnSync = function (ExePath, ExeParam) {
//     return cp.spawnSync(ExePath, ExeParam);
// };
// module.exports.StartSpawnPromise = function (ExePath, ExeParam, onDataCB, onErrDataCB, ExeOpt) {
//     return new Promise(function (resolve, reject) {
//         if (ExeParam === undefined) {
//             ExeParam = [];
//         }
//         if (ExeOpt == undefined) {
//             ExeOpt = {};
//         }
//         var ExeImg = cp.spawn(ExePath, ExeParam, ExeOpt); // detached:true parameter put here 


//         ExeImg.on('exit', function (code) {
//             /*if (onExitCB instanceof Function) {
//                 onExitCB(code);
//             }*/
//             resolve(code);
//         });

//         ExeImg.stdout.on('data', function (data) {
//             if (onDataCB instanceof Function) {
//                 onDataCB(data.toString());
//             }
//             //console.log(data.toString());
//         });

//         ExeImg.stderr.on('data', function (data) {
//             if (onErrDataCB instanceof Function) {
//                 onErrDataCB(data.toString());
//             }
//             console.log(data.toString());
//             //reject();
//         });
//     });


// };
module.exports.PROCESS_EXIT_CODE = PROCESS_EXIT_CODE;