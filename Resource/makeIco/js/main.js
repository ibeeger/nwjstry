
var dir = require("./js/dir.js");
var config = require("./js/config.js");
var strli = "";
var files = [];
//48,72,96,144
// var sizes = [48, 72, 96, 114, 144],

 

var step = 0,
	base64Data = "",
	timer;
var canvas = document.getElementById('cs'),
	ctx = canvas.getContext("2d");
var qico = document.querySelector(".ico");
var holder = document.querySelector('.box'),
	state = document.getElementById('status');
if (typeof window.FileReader === 'undefined') {
	state.className = 'fail';
} else {
	state.className = 'success';
}





qico.addEventListener("click", function() {
	strli = "";
	$(".set").show();
	for (var i = 0; i < sizes.length; i++) {
		if (sizes[i]["open"] == true) {
			strli += "<li class='cs'>" + sizes[i]["value"] + "</li>"
		} else {
			strli += "<li>" + sizes[i]["value"] + "</li>"
		};
	};
	$(".set ul").html(strli);
	$(".set ul li").click(changeItem);
}, false);

// dir.saveTest(JSON.stringify(process.env))

holder.ondragover = function() {
	state.className = 'hover';
	return false;
};
holder.ondragend = function() {
	state.className = 'norm';
	return false;
};
holder.ondrop = function(e) {
	e.preventDefault();
	files = e.dataTransfer.files;
	files = objToArry(files);
	if (files.length > 1) {
		state.innerHTML = "每次只能处理一张图片,请重试";
		return;
	};
	var img = document.createElement("img");
	img.src ="file://"+files[0].path;
	state.innerHTML = "正在裁切中..."
	makeImage(img);
	return false;
};

config.get(function(s) {
	if (s == null) {
		$(".set").show();
	} else {
		sizes = s;
	};
})

function objToArry(obj) {
	var _obj = [];
	for (var i = obj.length - 1; i >= 0; i--) {
		_obj.push(obj[i])
	};
	return _obj;
};

function getImgSize(img, callback) {
	 
	img.onload= function() {
		callback({
			w: img.width,
			h: img.height
		});
	}
};

$(".set ul li").click(changeItem);

$(".set a").click(function() {
	var lt = $(".set li");
	var arr = [];
	for (var i = 0; i < lt.length; i++) {
		arr[i] = {
			open: lt.eq(i).hasClass("cs") ? true : false,
			value: lt.eq(i).html()
		};
	};
	sizes = arr;
	config.init(arr);
	$(".set").hide();
});

function changeItem() {

	if ($(this).hasClass("cs")) {
		$(this).removeClass("cs")
	} else {
		$(this).addClass("cs")

	};

}

function drawImage() {
	step = 0;
	console.log(files);
	sizes.forEach(function() {
		if (sizes[step]["open"] == true) {
			canvas.width = parseInt(sizes[step]["value"]);
			canvas.height = parseInt(sizes[step]["value"]);
			var img = new Image();
			img.src = "file://"+files[0]["path"];
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			base64Data = cs.toDataURL().replace(/^data:image\/png;base64,/, "");
			dir.saveFile({
				img: base64Data,
				size: sizes[step]["value"]
			}, state);

		}
		step++;
	})
	if (step == sizes.length) {
		state.className = "norm";
		state.innerHTML = "裁剪完成~桌面查看result";
	} else {
		drawImage(sizes, step);
		dir.saveTest(456 + new Date().getTime());
	}
}

function makeImage(pic) {
	getImgSize(pic, function(ds) {
		drawImage(step);
	});
};