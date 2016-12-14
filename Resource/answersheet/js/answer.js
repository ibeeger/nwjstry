/*
 * @Author: ibeeger
 * @Date:   2016-12-05 17:41:48
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-12-06 10:09:54
 */

'use strict';
var Radio = Vue.extend({
	template: "<div v-if='radios.length>0' class='radios'><dl class='radiodl' v-for='one in radios'><dt class='number_index'></dt><dd v-for='item in one.items'>[{{item}}]</dd></dl></div>"
});

var Blank = Vue.extend({
	template: "<div v-if='blanks.length>0' class='blanks'><dl class='blanksdl' v-for='one in blanks'><dt class='number_index'></dt><dt></dt><dd></dd></dl></div>"
})
var radios = new Radio({
		data: {
			radios: []

		}
	})


	// 挂载到元素上
radios.$mount('#radios');

new Vue({
	el: "#ctrl",
	methods: {
		updataRadio: function(event) {
			var list = [];
			for (var k = 0; k < event.target.value; k++) {
				list.push({
					items: ["A", "B", "C", "D"]
				})
			};
			profile.$data = {
				radios: list
			}
		},
		updataBlank: function(event) {
			var list = [];
			for (var k = 0; k < event.target.value; k++) {
				list.push({
					fast:["image","pic","ids"]
				})
			};
			profile.$data = {
				radios: list
			}
		}
	}
})