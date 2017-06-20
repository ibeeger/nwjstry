(function() {
	var client = require("./module/https_client.js");
	client.setUa(navigator.userAgent);
	client.setHost(api.host);
	var gui = require('nw.gui');
	var fs = require("fs");
	var _path = !process.env.HOME ? process.env.ProgramFiles + "/ueditor/" : process.env.HOME + "/Library/ueditor/";
	var version = "1.0.2";
	function showEdit() {
		var new_win = gui.Window.open('./view/main.html', {
			position: 'center',
			width: 900,
			height: 600,
			// toolbar: true,
			frame: true,
			min_width: 900,
			min_height: 600,
			max_width: 900,
			max_height: 600
		});
		win.close();
	}

	//启动方法
	function startup(data) {
		try {
			if (typeof data == 'string') {
				data = JSON.parse(data);
			};
			if (version == data.data.v) {
				setTimeout(showEdit, 1000);
			} else {
				fs.unlinkSync(_path+"config.json")
				alert(data.data.v+"\n"+data.data.msg);
				gui.Shell.openExternal(data.data.url);
				window.close();
			}

		} catch (e) {
			setTimeout(showEdit, 1000);
		}
	}

	client.post(api.updataUrl, {}, startup);
})()