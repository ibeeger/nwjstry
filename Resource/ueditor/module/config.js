/*
 * @Author: ibeeger
 * @Date:   2016-11-24 19:16:01
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-06-05 10:17:18
 */

'use strict';

var api = {
	host: "ibeeger.com",
	port: 80,
	updataUrl: "/ueditor/updata",
	initUrl: "/ueditor/init",
};


function showQr(token,id) {
	var layer = document.getElementById("bgpop");
	layer.style.display="block"

	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text: "https://ibeeger.com/ueditor/"+token+"/"+id,
		width: 200,
		height: 200,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
}

window.api = api;
window.showQr = showQr