(function() {
	var client = require("./module/http_client.js");
	client.setUa(navigator.userAgent);
	client.setHost("local.ushow.com");

	function showEdit() {
		var new_win = gui.Window.open('./view/main.html', {
			position: 'center',
			width: 900,
			height: 600,
			toolbar: false,
			frame: true
		});
		win.close();
	}



	//启动方法
	function startup(data) {
		try {
			if (typeof data == 'string') {
				data = JSON.parse(data);
			};
			switch (data.data.up) {
				case 1:
					alert("升级中");
					break;
				default:
					showEdit();
			}
		} catch (e) {
			showEdit();
		}

	}

	client.post("/ueditor/updata", {}, startup);
})()