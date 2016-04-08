/*
* @Author: ibeeger
* @Date:   2016-04-08 10:21:31
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-08 10:27:20
*/

'use strict';


(function(){
	window.Db = {
		save:function(key,value){
			value = typeof value !="string" ? value.toString() : value;
			localStorage.setItem(key,value);
		},
		get:function(key){
			return localStorage.getItem(key);
		}
	}
})()