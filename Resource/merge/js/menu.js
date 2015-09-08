function apppic(url) {
	var qr = document.createElement("img");
	// qr.id = "zhifubao";
	qr.style.position = "absolute";
	qr.style.left = "50px";
	qr.style.top = "50px";
	qr.src = url || "http://works.ibeeger.com/imgfile/zhifubao.jpg";
	qr.style.display="none";
	document.body.appendChild(qr);
	return qr;
};
var zhifubao = new apppic("http://works.ibeeger.com/imgfile/zhifubao.jpg");
var weixin = new apppic("http://works.ibeeger.com/imgfile/weixin.jpg")

function Menu(cutLabel, copyLabel, pasteLabel) {
	var gui = require('nw.gui'),
		menu = new gui.Menu(),
		cut = new gui.MenuItem({
			label: cutLabel || "赞助",
			click: function() {
				 zhifubao.style.display = "block";
				 zhifubao.onmouseout = function() {
						zhifubao.style.display = "none";
				}
					//document.execCommand("cut");
			}
		}),
		copy = new gui.MenuItem({
			label: copyLabel || "Copy",
			click: function() {
				 weixin.style.display="block";
				 weixin.onmouseout = function() {
					weixin.style.display = "none";
				}

				//document.execCommand("cut");
			}
		}),
		paste = new gui.MenuItem({
			label: pasteLabel || "Paste",
			click: function() {
				// window.open("http://www.baidu.com");
				gui.Shell.openExternal("http://ibeeger.com")
					// document.execCommand("paste");
			}
		});
	menu.append(cut);
	menu.append(copy);
	menu.append(paste);

	return menu;
};

var gui = require('nw.gui');
menu = new Menu("赞助", "关于", "ibeeger");
// Popup as context menu
// menu.popup(10, 10);
window.addEventListener("contextmenu", function(e) {

	menu.popup(parseInt(e.clientX), parseInt(e.clientY));
	// document.querySelector(".fxed").innerHTML = document.querySelectorAll("img").length;
}, false)