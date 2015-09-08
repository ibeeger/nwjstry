var fs = require("fs");

function saveFile(data, tip) {
	var home = process.env.HOME || process.env.HOMEPATH;
	fs.readdir(home + "/Desktop/result", function(err, rst) {
		if (err) {
			fs.writeFile(home + "/Desktop/result/"+data["size"]+"x"+data["size"]+".png", data["img"], "base64", function() {
				// document.querySelector(".fxed").innerHTML = JSON.stringify(process.env);
				tip.className = 'norm';
				tip.innerHTML = "裁剪完成~桌面查看result";

			})
		} else {
			fs.writeFile(home + "/Desktop/result/"+data["size"]+"x"+data["size"]+".png", data["img"], "base64", function() {
				// document.querySelector(".fxed").innerHTML = JSON.stringify(process.env);
				tip.className = 'norm';
				tip.innerHTML = "裁剪完成~桌面查看result";

			})
		};
	})
};

function saveTest(data){
	var home = process.env.HOME || process.env.HOMEPATH;
	data = typeof data == "object" ? JSON.stringify(data) : data;
	fs.writeFile(home+"/Desktop/a.json",data,function(){
		
	})
}


module.exports = {
	saveFile: saveFile,
	saveTest:saveTest,
	a: 1,
	b: 2
}