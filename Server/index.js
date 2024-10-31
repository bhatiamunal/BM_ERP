global.__debug = false;

console.log(`Starting BM_ERP...`);

var ModCfg = require('./config/ModuleConfig');

/*
 * Default Module to Start
 */
var ModName = ModCfg.TPAM.name;


var args = process.argv.slice(2);

if (args.length) {
    ModName = args[0];
}

var objModule = null;

switch (ModName) {
    case ModCfg.AEM.name:
        {
            objModule = require('./modules/AEModule');
            break;
        }
    case ModCfg.DMM.name:
        {
            objModule = require('./modules/DMModule');
            break;
        }
    case ModCfg.DGM.name:
        {
            objModule = require('./modules/DGMModule');
            break;
        }
    case ModCfg.DPU.name:
        {
            objModule = require('./modules/DPUModule');
            break;
        }
    case ModCfg.DPM.name:
        {
            objModule = require('./modules/DPMModule');
            break;
        }
    case ModCfg.DSFM.name:
        {
            objModule = require('./modules/DSFMModule');
            break;
        }
    case ModCfg.PMM.name:
        {
            objModule = require('./modules/PMModule');
            break;
        }
    case ModCfg.RCM.name:
        {
            objModule = require('./modules/RCModule');
            break;
        }
    case ModCfg.TPAM.name:
        {
            objModule = require('./modules/TPAModule');
            break;
        }
    case ModCfg.TTM.name:
        {
            objModule = require('./modules/TTModule');
            break;
        }
    case ModCfg.TCM.name:
        {
            objModule = require('./modules/TCMModule');
            break;
        }
    case ModCfg.VEEM.name:
        {
            objModule = require('./modules/VEEModule');
            break;
        }
    case ModCfg.WCM.name:
        {
            objModule = require('./modules/WCModule');
            break;
        }
    case ModCfg.WPM.name:
        {
            objModule = require('./modules/WPModule');
            break;
        }
    case ModCfg.WSM.name:
        {
            objModule = require('./modules/WSModule');
            break;
        }
    case ModCfg.SNMPM.name:
        {
            objModule = require('./modules/SNMPModule');
            break;
        }
    case ModCfg.NTPM.name:
        {
            objModule = require('./modules/NTPModule');
            break;
        }
    case ModCfg.WPCM.name:
        {
            objModule = require('./modules/WebPush/WPCModule');
            break;
        }
    case ModCfg.WPSM.name:
        {
            objModule = require('./modules/WebPush/WPSModule');
            break;
        }
    case ModCfg.RPM.name:
        {
            objModule = require('./modules/RPMModule');
            break;
        }
    case ModCfg.FMM.name:
        {
            objModule = require('./modules/FMModule');
            break;
        }
    case ModCfg.MAILM.name:
        {
            objModule = require('./modules/mailmodule');
            break;
        }
    case ModCfg.SMSM.name:
        {
            objModule = require('./modules/smsmodule');
            break;
        }
    case ModCfg.TPDI.name:
        {
            objModule = require('./modules/tpdimodules');
            break;
        }
    //Added by Anuj: 23/05/2023
    case ModCfg.EDM.name:
        {
            objModule = require('./modules/edmmodule');
            break;
        }
    default:
        {
            objModule = null;
            break;
        }
}

if (objModule != null) {
    var data =new objModule();
    data.Initiate()
}
else {
    console.log(`Module Name : ${ModName} not defined in system`);
}