/*
 * @Author: ibeeger
 * @Date:   2016-10-26 15:03:43
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-10-27 18:22:02
 */

'use strict';
(function() {
	var fs = require("fs");
	var _path = !process.env.HOME ? process.env.ProgramFiles + "/ueditor/" : process.env.HOME + "/Library/ueditor/";
	var html = document.getElementById('mhtml').innerHTML;
	var Vel = require("velocityjs");
	var client = require("./module/http_client.js");
	client.setUa(navigator.userAgent);
	client.setHost("local.ushow.com");

	var doms = [];

	function initConfig(data) {
		try {
			data = JSON.parse(data);
			if (data.code == 0) {
				document.getElementById('main').innerHTML = Vel.render(html, data, {});
				for (var i = 0; i < data.config.length; i++) {
					if (data.config[i].type == 'ueditor') {
						UE.getEditor("ueditor" + data.config[i].key);
					}
				};
				fs.mkdir(_path, "777", function() {
					fs.writeFileSync(_path + "config.json", JSON.stringify(data), 'utf8');
				});
			}
		} catch (e) {
			console.log(e);
		}
	};

	try {
		var data = fs.readFileSync(_path + "config.json", 'utf8');
		data = JSON.parse(data);
		document.getElementById('main').innerHTML = Vel.render(html, data, {});
		for (var i = 0; i < data.config.length; i++) {
			if (data.config[i].type == 'ueditor') {
				UE.getEditor("ueditor" + data.config[i].key);
			}
		};
	} catch (e) {
		console.log(e)
		console.log("create");
		client.post("/ueditor/init", {}, initConfig);
	}


})()