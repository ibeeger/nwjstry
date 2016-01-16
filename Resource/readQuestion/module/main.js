var $ = require("jQuery");

   var client = require("./module/http_client.js");

   var save = require("./module/dir.js");
   

   var url = "http://www.mofangge.com/ajax/aHighFren.ashx?ijf3f6t1&act=getQList&sub=02&type=3&sec=703&pn=";
   client.setCookie("bdshare_firstime","1452769963013");
   client.setHost("www.mofangge.com");
   client.setCookie("mfg_memberid","76828387");
   client.setCookie("mfg_membersgin","2D7D781092ECDE7FBC45BD078D26080A5D039BD380D0D2BF3387D8B5191D5A3B233AF9D732A91C9C71D4DBBCB65BD06E9C813CD0B459F8B00E9F346C7B27521F7AAF2852D5592E9681ED1DE53AE9E4F3");
   client.setMethod("GET");
   client.setType("text/plain; charset=utf-8");
  
   var html =[];
   var page = 1;
   var maxpage = 12;
   function writeHtml(str){
   	    var  dom = str.substr(10);
   	    var tds = $(dom).find("h3");
   	    var com = $(dom).find(".question");
   	     // maxpage = $(dom).find(".page a").eq(0).attr("href").split(",")[1].replace(")","");

   	     document.getElementById('max').innerHTML ="共"+maxpage+"页，正在获取第"+page+"页"; 
   	     
   	     var conn=""
   	    for (var i = tds.length - 1; i >= 0; i--) {
   	    	var str = {};
   	    	str["title"] = tds.eq(i).text();
   	    	str["con"]= com.eq(i).html();
   	    	conn += str["title"]+"<br>"+str["con"]+"<hr>";
   	  	    html.push(str);
   	    };
   	    document.getElementById('rst').innerHTML = conn;
   	   appcall.call(this,writeHtml);
   }


  	appcall(writeHtml)
  // document.getElementById('btn').onclick= function(){
  // 	    var _url =  document.getElementById('ipt').value;
  // 	     url = _url.substr(0,_url.indexOf("pn="))+"pn=";
  // 	     console.log(url);
  // 		appcall(writeHtml)
  // }
   
   
   function appcall (callback){
   	
   	 if (page>maxpage) {
   	 	 document.getElementById('max').style.display ="none";
   	 	document.getElementById('maxquestion').innerHTML = "获取完成共："+html.length+"道";
   	 	save.saveFile(html)
   	 	return;
   	 };

   	client.post(url+page,{},callback);
   	 page++;
   }