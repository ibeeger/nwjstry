/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-10-26 15:14:45
 */

'use strict';

var http = require("http"),
	cookie = "", host = "api.ibeeger.com",
	type = 'application/json',
	method = 'GET',
	ua = null,
	port = 80;
var client = {
	post: function(url, data, callback) {
		var _data = JSON.stringify(data),
			_datalth = Buffer.byteLength(_data, 'utf8');
		console.log(url);
		var _options = {
			hostname: host,
			port: port,
			path: url,
			method: method,
			headers: {
				 'User-Agent': ua,
			     // 'Content-Type': type,
				// 'Content-Length': _datalth,
				// 'Cookie': cookie
			}
		};

		var _req = http.request(_options, function(res) {
			var str = "";
			res.setEncoding('utf8');
			res.on("data",function(body){
				str+=body;
			});
			res.on("end",function(){
				callback(str);
			});
			res.on("error",function(){
				callback(null)
			})

		});
		_req.write(_data);
		_req.end();
	},
	setHost: function(value) {
		host = value;
	},
	setMethod: function(value) {
		method = value;
	},
	setPort: function(value) {
		port = value;
	},
	setCookie: function(name, value) {
		cookie = name + "=" + value;
	},
	setType: function(value) {
		type = value;
	},
	setUa:function(value){
		ua = value;
	}
}


module.exports = client;