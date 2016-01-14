var fs = require("fs");

function saveFile(data, tip) {
	var home = process.env.HOME || process.env.HOMEPATH;
	var _path = home +"/Desktop/result";
	try{
		 console.log(1);
		 fs.readDirSync(_path);
	}catch(e){
		 console.log(2);
		 fs.mkdir(_path,function(){
		 	fs.writeFileSync(_path+"/data.json",JSON.stringify(data));
		 	return ;
		 });
	}
	fs.writeFileSync(_path+"/data.json",JSON.stringify(data));
	
};


module.exports = {
	saveFile: saveFile,
	a: 1,
	b: 2
}