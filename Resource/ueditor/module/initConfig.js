/*
 * @Author: ibeeger
 * @Date:   2016-10-26 15:03:43
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-10-26 17:41:58
 */

'use strict';
(function() {

	var html = document.getElementById('mhtml').innerHTML;
	var Vel = require("velocityjs");
	 
	 
	var client = require("./module/http_client.js");
	client.setUa(navigator.userAgent);
	client.setHost("local.ushow.com");


	function initConfig(data) {
		try {
			data = JSON.parse(data);
			if (data.code == 0) {
				document.getElementById('main').innerHTML = Vel.render(html,data,{});

				for(var i=0; i<data.config.length; i++){
					if (data.config[i].type=='ueditor') {
						  UE.getEditor("ueditor"+data.config[i].key);
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	}

	client.post("/ueditor/init", {}, initConfig);

})()