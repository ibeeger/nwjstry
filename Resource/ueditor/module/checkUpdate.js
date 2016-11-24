(function() {
	var client = require("./module/http_client.js");
	client.setUa(navigator.userAgent);
	client.setHost(api.host);
	client.setPort(api.port);

	console.log(api)

	function showEdit() {
		var new_win = gui.Window.open('./view/main.html', {
			position: 'center',
			width: 900,
			height: 600,
			toolbar: true,
			frame: true,
			min_width: 900,
			min_height: 600,
			max_width: 900,
			max_height: 600,

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
			console.log(e)
			setTimeout(showEdit,1000);
		}
	}

	client.post(api.updataUrl, {}, startup);
})()