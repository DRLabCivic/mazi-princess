'use strict';

/*
* @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
* @Date:   2016-04-27 11:49:42
* @Last Modified by:   lutzer
* @Last Modified time: 2016-07-07 12:58:49
*/

/* use absolute paths for require */
global.r_require = function(name) {
    return require(__dirname + "/../" + name);
}

global.print = function(string) {
	console.log(string);
}

global.Config = r_require('/config.js');

// change to test database
Config.database = Config.testDatabase;
Config.port = Config.testPort;

require("./databaseTests.js");
require("./apiInterviewsTests.js");
require("./apiAttachmentTests.js");
require("./apiTagsTests.js");
require("./socketTests.js");