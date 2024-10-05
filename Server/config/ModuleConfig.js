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

MODULE.WCM = {
    name: "WCM",
    desc: "Web Client Module"
};
MODULE.DQAM = {
    name: "DQAM",
    desc: "Database Query Handler Module"
};
MODULE.FHM = {
    name: "FHM",
    desc: "File Handler Module"
};

module.exports = MODULE;