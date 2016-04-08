/*
 * @Author: ibeeger
 * @Date:   2016-04-08 10:12:04
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-04-08 17:06:53
 */

'use strict';

(function() {
	var ipt = document.getElementById('iptxt');
	var _hash = Db.get("roomid") || "roomid001";
	var user = Db.get("username") || "roomid001";
	// var ws = new WebSocket("ws://127.0.0.1:4003");
	var ws = new WebSocket("ws://115.28.35.15:3003");
	var timer;

	function open() {
		if (timer) {
			clearInterval(timer);
		}
		var data = JSON.stringify({
			socketid: _hash,
			uname: user,
			code: 1,
		});
		ws.send(data);
	};
	ws.onopen = open;


	function message(data) {
		if (timer) {
			clearInterval(timer);
		}
		var p = document.createElement("p");
		var d;
		try {
			d = JSON.parse(data["data"])
		} catch (e) {
			d = data;
		}
		if (d["code"] == 1) {
			document.getElementById('info').innerHTML = d["uname"] + "进入房间！";
			document.getElementById('info').style.display = "block";
			setTimeout(function() {
				document.getElementById('info').style.display = "none"
			}, 3000)
		} else {
			if (d["uname"] == user) {
				p.innerHTML = "<strong>" + d["msg"] + "</strong> ：<span>我</span>" || "";
				p.style.textAlign = "right";
			} else {
				p.innerHTML = "<span>" + d["uname"] + "</span>：<strong>" + d["msg"] + "</strong>" || "";
				p.style.textAlign = "left";
			}
			document.getElementById('msg').appendChild(p);
			var h = document.getElementById("msg").scrollHeight;
			document.getElementById('msg').scrollTop = h;
		}


	};
	ws.onmessage = message;

	function send(event) {
		if (event.keyCode == 13) {
			var _v = ipt.value;
			if (!_v) {
				return;
			};
			_v = _v.replace(/\</g, "&lt;");
			_v = _v.replace(/\>/g, "&gt;");
			try {
				var data = JSON.stringify({
					socketid: _hash,
					msg: _v.toString(),
					uname: user,
					code: 2,
				})
				ws.send(data);
				ipt.value = ""
			} catch (e) {

			}
		}
	}

	ipt.addEventListener("keyup", send, false);

	ws.onclose = function(){
		document.getElementById('reconnect').style.display="inline-block";
	};
	document.getElementById('reconnect').addEventListener("click",function(){
				 ws = new WebSocket("ws://115.28.35.15:3003");
				 ws.onopen=open;
				 ws.onmessage =  message;
	},false)

})()