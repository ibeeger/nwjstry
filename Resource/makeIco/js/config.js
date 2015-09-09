var fs = require("fs");
var dir = require("./dir.js");
var _path = !process.env.HOME  ? process.env.ProgramFiles+"/makeIco/" : process.env.HOME+"/Library/makeIco/";
var url = _path + "/config.js";

function makeConfig(data) {

	fs.readdir(_path, function(err, msg) {
			// dir.saveTest(arguments);
			if (err) {
				fs.mkdir(_path , 0777, function() {
					fs.writeFileSync(url, "module.exports={value:" + JSON.stringify(data) + "}")
				});
			} else {
				fs.writeFileSync(url, "module.exports={value:" + JSON.stringify(data) + "}");
			};
		})
		// fs.mkdirSync(process.env.HOME+"/Library/makeIco/");
};

function getConfig(callback) {
	try {
		callback(require(url).value);
	} catch (e) {
		callback(null)
	}

}

module.exports = {
	init: makeConfig,
	get: getConfig,
	url: url
}