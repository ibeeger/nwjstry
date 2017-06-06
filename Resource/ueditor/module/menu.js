/*
 * @Author: willclass
 * @Date:   2016-11-24 17:16:39
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-11-24 19:02:49
 */

'use strict';
var gui = require('nw.gui');

var clipboard = gui.Clipboard.get();

var text = clipboard.get();

var mb = new gui.Menu({
	type: "menubar"
});
mb.createMacBuiltin("ueditor");
gui.Window.get().menu = mb;

// var shortcutDefinitions = [{
// 	key: "Ctrl+V",
// 	active: function() {
// 		console.log("Global desktop keyboard shortcut: " + this.key + " active.");
// 	},
// 	failed: function(msg) {
// 		console.log(msg);
// 	}
// }];
// shortcutDefinitions.forEach(function(definition) {
// 	// Create a shortcut with |option|.
// 	var shortcut = new gui.Shortcut(definition);
// 	// Register global desktop shortcut, which can work without focus.
// 	gui.App.registerGlobalHotKey(shortcut);
// });
// 

