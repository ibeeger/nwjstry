/*
 * @Author: ibeeger
 * @Date:   2016-11-24 19:16:01
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-11-24 19:59:30
 */

'use strict';

var api = {
	host: "local.ushow.com",
	port: 80,
	updataUrl: "/ueditor/updata",
	initUrl: "/ueditor/init",
};


function showQr() {
	var layer = document.getElementById("bgpop");
	layer.style.display="block"

	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text: "http://jindo.dev.naver.com/collie",
		width: 188,
		height: 188,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
}

window.api = api;
window.showQr = showQr