//复制
function copytext(editor, uiName) {
	editor.registerCommand(uiName, {
		execCommand: function() {
			var range = editor.selection.getRange().select();
			var m = editor.selection.getText();
			var clip =ClipboardEvent('copy');
			    clip.clipboardData.setData('text/plain', m);
			    clip.preventDefault();
			    window.dispatchEvent(clip)
		}
	});
	var btn = new UE.ui.Button({
			name: uiName,
			title: "复制",
			cssRules: "background-position:-200px 0",
			onclick: function() {
				editor.execCommand(uiName);
				return;
			}
		})
		//当点到编辑内容上时，按钮要做的状态反射
	editor.addListener('selectionchange', function() {
		var state = editor.queryCommandState(uiName);
		if (state == -1) {
			btn.setDisabled(true);
			btn.setChecked(false);
		} else {
			btn.setDisabled(false);
			btn.setChecked(state);
		}
	});
	return btn
};
//剪切
function cuttext(editor, uiName) {
	editor.registerCommand(uiName, {
		execCommand: function() {
			var range = editor.selection.getRange().select();
			var m = editor.selection.getText();
			// var rst = editor.getContent().replace(m,"");
			// editor.setContent(rst);
			console.log(m)
		}
	});
	var btn = new UE.ui.Button({
			name: uiName,
			title: "剪切",
			cssRules: "background-position:-300px 0",
			onclick: function() {
				editor.execCommand(uiName);
				return;
			}
		})
		//当点到编辑内容上时，按钮要做的状态反射
	editor.addListener('selectionchange', function() {
		var state = editor.queryCommandState(uiName);
		if (state == -1) {
			btn.setDisabled(true);
			btn.setChecked(false);
		} else {
			btn.setDisabled(false);
			btn.setChecked(state);
		}
	});
	return btn
}

function tabIndent(editor,uiName){
	editor.registerCommand(uiName,{
		execCommand:function(){
			editor.execCommand("inserthtml","(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)")
		}
	})


	var btn = new UE.ui.Button({
		name:uiName,
		title:"缩进",
		cssRules:"background-position:-260px 0",
		onclick:function(){
			editor.execCommand(uiName);
		}
	})
	return btn;
}

UE.registerUI("tab",tabIndent);

UE.registerUI("cuttext", cuttext);
UE.registerUI("copytext", copytext);