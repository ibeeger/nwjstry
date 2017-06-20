var fs = require("fs");

function saveFile(data, tip) {
	var home = process.env.HOME || process.env.HOMEPATH;
	fs.readdir(home + "/Desktop/result", function(err, rst) {
		// saveTest(arguments);
		if (err) {
			fs.mkdir(home + "/Desktop/result", 0777, function() {
				fs.writeFileSync(home + "/Desktop/result/" + data["size"] + "x" + data["size"] + ".png", data["img"], "base64");
			});
		};
		setTimeout(function() {
			fs.writeFileSync(home + "/Desktop/result/" + data["size"] + "x" + data["size"] + ".png", data["img"], "base64");
		})
	})
};

function saveTest(data) {
	alert(JSON.stringify(data));
	var home = process.env.HOME || process.env.HOMEPATH;
	data = typeof data == "object" ? JSON.stringify(data) : data;
	fs.writeFileSync(home + "/Desktop/a.json", data)
}


module.exports = {
	saveFile: saveFile,
	saveTest: saveTest,
	a: 1,
	b: 2
}