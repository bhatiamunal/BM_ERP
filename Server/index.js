
global.__debug = true;



var ModCfg = require('./config/ModuleConfig');

/*
 * Default Module to Start
 */
var ModName = ModCfg.WCM.name;
var args = process.argv.slice(2);

if (args.length) {
    ModName = args[0];
}

var objModule = null;

switch (ModName) {
    case ModCfg.IVAM.name:
        {
            objModule = require('./module/WebClient');
            break;
        }
   
    default:
        {
            objModule = null;
            break;
        }
}

if (objModule != null) {
    new objModule();
}
else {
    //console.log(`Module Name : ${ModName} not defined in system`);
}