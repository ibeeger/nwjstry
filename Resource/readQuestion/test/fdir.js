var fs = require("fs");

try{
	var isok =  fs.readdirSync("./abcc");
	fs.writeFileSync("./abcc/a.json","adsfasdfs");
}catch(e){
	fs.mkdirSync("./abcc",0777);
	fs.writeFileSync("./abcc/a.json","adsfasdfsadf");
}


console.log(isok)
