/* 
* @Author: willclass
* @Date:   2016-01-14 19:54:32
* @Last Modified by:   willclass
* @Last Modified time: 2016-01-15 22:13:28
*/

'use strict';

 var client = require("./module/http_client.js");

     

   // // var url = "http://www.mofangge.com/app/highfren/hfinfo.aspx?sid=524&sub=02&zm=2&sna=%E4%B8%A4%E8%A7%92%E5%92%8C%E4%B8%8E%E5%B7%AE%E7%9A%84%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E5%8F%8A%E4%B8%89%E8%A7%92%E6%81%92%E7%AD%89%E5%8F%98%E6%8D%A2&pn=1";
   // var url = "http://www.mofangge.com/app/highfren/hfinfo.aspx?sid=524&sub=02&zm=2&sna=%E4%B8%A4%E8%A7%92%E5%92%8C%E4%B8%8E%E5%B7%AE%E7%9A%84%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E5%8F%8A%E4%B8%89%E8%A7%92%E6%81%92%E7%AD%89%E5%8F%98%E6%8D%A2&pn=1";
   // client.setCookie("bdshare_firstime","1452769963013");
   // client.setHost("www.mofangge.com");
   // client.setCookie("mfg_memberid","76828387");
   // client.setCookie("mfg_membersgin","2D7D781092ECDE7FBC45BD078D26080A5D039BD380D0D2BF3387D8B5191D5A3B233AF9D732A91C9C71D4DBBCB65BD06E9C813CD0B459F8B00E9F346C7B27521F7AAF2852D5592E9681ED1DE53AE9E4F3");
   // client.setMethod("GET");
   // client.setType("text/plain; charset=utf-8");
   // client.post(url,{},function(str){
   // 	    console.log(str);
   		 
   // })


client.setHost("user.mofangge.com");
client.post("http://user.mofangge.com/Account/Login/",{
    txt_userid: "76828387", txt_userpw: "ibeeger123",iswriteCookie:0
},function(arg){
   console.log(arg)
})