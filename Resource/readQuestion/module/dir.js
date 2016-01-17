var fs = require("fs");

function saveFile(data, tip) {
	var home = process.env.HOME || process.env.HOMEPATH;
	var _path = home +"/Desktop/result";
	try{
		 console.log(1);
		  fs.mkdirSync(_path);
		  fs.writeFileSync(_path+"/data.json",JSON.stringify(data));
	}catch(e){
		 console.log(2);
		
		 fs.writeFileSync(_path+"/data.json",JSON.stringify(data));
		 return;
	}
};


module.exports = {
	saveFile: saveFile,
	a: 1,
	b: 2
}