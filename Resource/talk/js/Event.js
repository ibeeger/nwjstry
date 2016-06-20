/*
* @Author: ibeeger
* @Date:   2016-04-08 10:51:43
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-11 16:55:00
*/

'use strict';


(function(){
	var tit = document.querySelector("h4");
	var canmove = false;
	var start = {}
	
	document.getElementById('close').addEventListener("click",function(){
		win.close();
	},false);

	window.addEventListener("click",function(event){
		var t = event.target;
		if (t.tagName=="A") {
			gui.Shell.openExternal(t.href);
		};
		event.preventDefault();
	},false);
})()