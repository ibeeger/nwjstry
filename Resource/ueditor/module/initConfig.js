/*
 * @Author: ibeeger
 * @Date:   2016-10-26 15:03:43
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-11-25 15:56:30
 */

'use strict';
(function() {
	var gui = require('nw.gui');
	var fs = require("fs");
	var _path = !process.env.HOME ? process.env.ProgramFiles + "/ueditor/" : process.env.HOME + "/Library/ueditor/";
	var html = document.getElementById('mhtml').innerHTML;
	var Vel = require("velocityjs");
	var client = require("./module/http_client.js");
	var Cdata;
	client.setUa(navigator.userAgent);
	client.setHost(api.host);
	client.setPort(api.port);

	var ue;

	function ready() {
		var btn = $('#submit');
		var adv = $('#adv');

		btn.on("click", function() {
			console.log("提交")
			var content = ue.getContent(); //内容
			var json = {};
			var data = Cdata;
			for (var i = 0; i < data.config.length; i++) {
				var list = data.config[i];

				if (list["type"] == 'ueditor') {
					json[list["key"]] = content;
				} else {
					json[list["key"]] = document.getElementById(list["key"]).value;
				};
				if (json[list["key"]].trim() == "") {
					alert(list["name"] + "不能为空");
					return;
				}
			};
			json["token"] = data["key"];
			document.getElementById('main').setAttribute("class", "blur");
			$.ajax({
				url: data.server["host"] + data.server["url"],
				data: json,
				// contentType:"application/json",
				method: data.server["method"],
				success: function(rst) {
					rst = typeof rst == 'string' ? JSON.parse(rst) : rst;
					if (rst.code == 0) {
						showQr(data["key"], rst.data);
					} else {
						alert("保存失败!");
						document.getElementById('main').removeAttribute("class", "blur");
					}

				}
			})
		});


		adv.on("click", function() {
			gui.Shell.openExternal("http://works.ibeeger.com/softs/feedback.html?from=ueditor");
		})

	};

	var doms = [];
	//初始化结构
	function initConfig(data) {
		try {
			data = JSON.parse(data);
			Cdata = data;
			if (data.code == 0) {
				document.getElementById('main').innerHTML = Vel.render(html, data, {});
				for (var i = 0; i < data.config.length; i++) {
					if (data.config[i].type == 'ueditor') {
						ue = UE.getEditor("ueditor" + data.config[i].key);
					}
				};
				fs.mkdir(_path, "777", function() {
					fs.writeFileSync(_path + "config.json", JSON.stringify(data), 'utf8');
					ready();
				});
			}
		} catch (e) {
			alert("第一次打开必须在联网状态下！");
			window.close();
		}

	};

	try {
		data = fs.readFileSync(_path + "config.json", 'utf8');
		data = JSON.parse(data);
		Cdata = data;
		document.getElementById('main').innerHTML = Vel.render(html, data, {});
		for (var i = 0; i < data.config.length; i++) {
			if (data.config[i].type == 'ueditor') {
				ue = UE.getEditor("ueditor" + data.config[i].key);
			}
		};
		window.onload = ready;
	} catch (e) {
		console.log("create");
		client.post(api.initUrl, {}, initConfig);
	}



})()