var fs = require("fs");
var dir = require("./dir.js");
var url = process.env.HOME + "/Library/makeIco/config.js";

function makeConfig(data) {

	fs.readdir(process.env.HOME + "/Library/makeIco/", function(err, msg) {
			// dir.saveTest(arguments);
			if (err) {
				fs.mkdirSync(process.env.HOME + "/Library/makeIco/");
				fs.writeFile(url, "module.exports={value:[" + data + "]}", function() {})
			} else {
				fs.writeFileSync(url, "module.exports={value:[" + data + "]}");
			};
		})
		// fs.mkdirSync(process.env.HOME+"/Library/makeIco/");
};

function getConfig(callback) {
	var s = require(url);
	callback(s.value);
}

module.exports = {
	init: makeConfig,
	get: getConfig,
	url: url
}