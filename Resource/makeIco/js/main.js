var dir = require("./js/dir.js");
var config = require("./js/config.js");
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
	config.init(sizes);

	// dir.saveTest(JSON.stringify(process.env));
}, false);

holder.ondragover = function() {
	state.className = 'hover';
	return false;
};
holder.ondragend = function() {
	state.className = 'norm';
	return false;
};
holder.ondrop = function(e) {
	window.localStorage.setItem("b", "123123");
	e.preventDefault();
	files = e.dataTransfer.files;
	files = objToArry(files);
	// document.querySelector(".fxed").innerHTML = window.localStorage;
	if (files.length > 1) {
		state.innerHTML = "每次只能处理一张图片,请重试";
		return;
	};
	// files.forEach(initImage);
	// document.querySelector(".fxed").innerHTML = step + ":" + imgs;

	timer = setInterval(function() {
		var img = document.createElement("img");
		img.src = files[0].path;
		state.innerHTML = step + "正在裁切中..."
		makeImage(img);
	}, 100);
	return false;
};


function objToArry(obj) {
	var _obj = [];
	for (var i = obj.length - 1; i >= 0; i--) {
		_obj.push(obj[i])
	};
	return _obj;
};

function getImgSize(img, callback) {
	img.onload = function() {
		callback({
			w: img.width,
			h: img.height
		});
	}
}

function makeImage(pic) {
	getImgSize(pic, function(ds) {
		config.get(function(sizes) {
			canvas.width = sizes[step];
			canvas.height = sizes[step];
			var img = new Image();
			img.src = files[0]["path"];
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0, sizes[step], sizes[step]);
			base64Data = cs.toDataURL().replace(/^data:image\/png;base64,/, "");
			dir.saveFile({
				img: base64Data,
				size: sizes[step]
			}, state);
			step++;
			if (step == sizes.length) {
				clearTimeout(timer);
			}
		})

	});
};