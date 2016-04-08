/*
* @Author: ibeeger
* @Date:   2016-04-08 10:51:43
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-08 15:10:38
*/

'use strict';


(function(){
	var tit = document.querySelector("h4");
	var canmove = false;
	var start = {}
	tit.addEventListener("mousedown",function(e){
		canmove = true;
		start = {x:e.screenX,y:e.screenY}
	},false);
	tit.addEventListener("mousemove",function(e){
		if (canmove) {
			// document.querySelector(".debugger").innerHTML =  "screen:"+e.screenX+":"+e.screenY+"<br> page:"+e.pageX+":"+e.pageY;
			window.moveBy(e.screenX-start.x,e.screenY-start.y);
			start = {
				x:e.screenX,
				y:e.screenY
			}
		}
	},false)
	window.addEventListener("mouseup",function(e){
		canmove = false;
	},false);
	tit.addEventListener("mouseout",function(e){
		canmove = false;
	},false);
	document.getElementById('close').addEventListener("click",function(){
		win.close();
	},false);

	window.addEventListener("click",function(event){
		var t = event.target;
		if (t.tagName=="A") {
			gui.Shell.openExternal(t.href);
		};
		event.preventDefault();
	},false)
})()