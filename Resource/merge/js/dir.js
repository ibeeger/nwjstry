var fs = require("fs");
function saveFile(data,tip) {
		var home = process.env.HOME || process.env.HOMEPATH;
		fs.readdir(home + "/Desktop/result", function(err, rst) {
			if (err) {
				fs.mkdir(home + "/Desktop/result", 0777, function(err, rst) {
					fs.writeFile(home + "/Desktop/result/result.css",data["css"],function(){
						tip.className = 'norm';
						tip.innerHTML = "合并完成~桌面查看result";
 
					});
					fs.writeFile(home + "/Desktop/result/result.png", data["img"], "base64", function() {
						// document.querySelector(".fxed").innerHTML = JSON.stringify(process.env);
						tip.className = 'norm';
						tip.innerHTML = "合并完成~桌面查看result";
 
					})
				});
			}else{
				fs.writeFile(home + "/Desktop/result/result.css",data["css"],function(){
						tip.className = 'norm';
						tip.innerHTML = "合并完成~桌面查看result";
 
					});
					fs.writeFile(home + "/Desktop/result/result.png", data["img"], "base64", function() {
						// document.querySelector(".fxed").innerHTML = JSON.stringify(process.env);
						tip.className = 'norm';
						tip.innerHTML = "合并完成~桌面查看result";
 
				})
			};
		})
	};


module.exports = {
	saveFile : saveFile,
	a:1,
	b:2
}