/*
 * Store all the process that is running is this system
 * Process Monitor Module initially read this configuration file and run all the process
 * that were present in this file.
 *
 * Process Property
 * Name: Name of the Process
 * Description: Description of the process
 * ChannelName: Unique for all the channel
 * Database Object: Reference to database
 * Process State: Process State
 *
 * This file is either hard-coded or can be configurable form the system.
 */
var MODULE = {};

MODULE.AEM = {
    name: "AEM",
    desc: "Alarm Event Module",
    file: "AEModule.js"
};
MODULE.DMM = {
    name: "DMM",
    desc: "Data Manager Module",
    file: "DMModule.js"
};
MODULE.PMM = {
    name: "PMM",
    desc: "Process Monitor Module",
    file: "PMModule.js"
};
MODULE.RCM = {
    name: "RCM",
    desc: "Redundancy Controller Module",
    file: "RCModule.js"
};
MODULE.TTM = {
    name: "TTM",
    desc: "Trace & Trap Module",
    file: "TTModule.js"
};
MODULE.TPAM = {
    name: "TPAM",
    desc: "Third Party Access Module",
    file: "TPAModule.js"
};
MODULE.VEEM = {
    name: "VEEM",
    desc: "Validation, Estimating & Editing Module",
    file: "VEEModule.js"
};
//Added by Anuj: 23/05/2023
MODULE.EDM = {
    name: "EDM",
    desc: "External, Data, Module",
    file: "EDMModule.js"
};
MODULE.WSM = {
    name: "WSM",
    desc: "Web Server Module",
    file: "WSModule.js"
};
MODULE.WCM = {
    name: "WCM",
    desc: "Web Client Module",
    file: "WCModule.js"
};
MODULE.WPM = {
    name: "WPM",
    desc: "Web Proxy Module",
    file: "WPModule.js"
};
MODULE.DSFM = {
    name: "DSFM",
    desc: "Data Scheduler & Forecast Module",
    file: "DSFMModule.js"
};
MODULE.DPM = {
    name: "DPM",
    desc: "Data Processor Module",
    file: "DPMModule.js"
};

MODULE.TCM = {
    name: "TCM",
    desc: "Table Creator Module",
    file: "TCMModule.js"
};

MODULE.MMM = {
    name: "MMM",
    desc: "Module Manager Module",
    file: "UI Module/MMModule.js"
};
MODULE.DGM = {
    name: "DGM",
    desc: "Data Generator Module",
    file: "DGModule.js"
};

MODULE.SEM = {
    name: "SEM",
    desc: "Stop EMS Module",
    file: "SEModule.js"
};
MODULE.DPU = {
    name: "DPU",
    desc: "Data Population Unit",
    file: "DPUModule.js"
};

/*
 * Mail Module
 */
MODULE.MAILM = {
    name: "MAILM",
    desc: "Mailer Module",
    file: "MailModule.js"
};

/*
 * SMS Module
 */
MODULE.SMSM = {
    name: "SMSM",
    desc: "SMS Module",
    file: "SMSModule.js"
};

/*
 * All the protocol handler that are runnign is RUN in 
 */
MODULE.PRH = {
    name: "PRH",
    desc: "Protocol Handler Module",
    file: "exe/PRH.exe"
};
/*
 * SNMP Module 
 */
MODULE.SNMPM = {
    name: "SNMPM",
    desc: "Simple Network Managment protocol Module",
    file: "SNMPModule.js"
};
/*
 * NTP Module for time sync
 */
MODULE.NTPM = {
    name: "NTPM",
    desc: "Network time protocol Module",
    file: "NTPModule.js"
};

/*
 * Web Push Server Module
 */
MODULE.WPSM = {
    name: "WPSM",
    desc: "WebPush Server Module",
    file: "WPSModule.js"
};

/*
 * Web Push Client Module
 */
MODULE.WPCM = {
    name: "WPCM",
    desc: "WebPush Client Module",
    file: "WPCModule.js"
};
/*
 * Repoter Module
 */
MODULE.RPM = {
    name: "RPM",
    desc: "Repoter Module",
    file: "RPMModule.js"
};
/* 
 * File Manager Module
 */
MODULE.FMM = {
    name: "FMM",
    desc: "File Manager Module",
    file: "FMModule.js"
};

/*
 * EMS functionality is further extended to implement SCADA HDS side module:
 * We are usign following EMS modules in HDS:
 * 1. RCM Module: Used for maintain two postgresql database cluster in syncronisation.
 * 2. DMM Module: Used for abstract the interaction with the database.
 * 3. TTM Module: Used for dumping trace and trap
 */

MODULE.HDSRCM = {
    name: "HDSRCM",
    desc: "HDS Redundancy Controller Module",
    file: "HDSRCModule.js"
};

MODULE.HDSDMM = {
    name: "HDSDMM",
    desc: "HDS Data Manger Module",
    file: "HDSDMModule.js"
};

MODULE.HDSTTM = {
    name: "HDSTTM",
    desc: "HDS Trace Trap Module",
    file: "HDSTTModule.js"
};



//Added BY Vibhor Bansal on 21-07-2021
//For HDS play back modules
MODULE.RCMPLAYBACK = {
    name: "RCMPLAYBACK",
    desc: "Playback Redundancy Controller Module",
    file: "RCModule.js"
};
MODULE.HDSRCMPLAYBACK = {
    name: "HDSRCMPLAYBACK",
    desc: "HDS Playback Redundancy Controller Module",
    file: "HDSPlaybackModule.js"
};
MODULE.DMMPLAYBACK = {
    name: "DMMPLAYBACK",
    desc: "Data Manager Module",
    file: "DMModule.js"
};
MODULE.TTMPLAYBACK = {
    name: "TTMPLAYBACK",
    desc: "Trace Trap Module",
    file: "TMModule.js"
};

// Third party data api module
MODULE.TPDI = {
    name: "TPDI",
    desc: "Third party Data API Module",
    file: "TPDIModule.js"
};
/*
 * Sample Code to Enter new Process in System
 * Config.push({name: "Process_Name", desc: "Process_Description", channel: "CH1", database: NULL, state: NULL});
 * And after that create a new ini file CONFIG folder of the project.
 */
module.exports = MODULE;