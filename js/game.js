let gameBegin = document.querySelector('.game-begin');
let enterGame = document.querySelector('.enter-game');
let musicNote = document.querySelector('.music-note');
let piano = document.querySelectorAll('.piano');
let backgroundMusic = document.querySelector('.background-music');
let backgroundMusicSwitch = document.querySelector('.background-music-switch');
let backgroundMusicSwitchContent = document.querySelector('.background-music-switch-content');
let gameMask = document.querySelector('.game-mask');
let backgroundCount = 0;
let isTouch = null;
let temp = null;
let musicNoteArr = [];
let throttle = null;

// 进入游戏
enterGame.onclick = function(){
	gameBegin.classList.add('hide');
	backgroundMusic.load();
	musicNote.load();
}

// 游戏背景音控制
backgroundMusic.volume = .8;
backgroundMusicSwitch.onclick = function() {
	// 暂停音乐
	if(!music.paused){
		musicPlay.classList.toggle('hide');
		musicPause.classList.toggle('hide');
		music.pause();
	}
	// 播放游戏背景音
	if (backgroundMusic.paused) {
		backgroundMusic.play();
	} else {
		backgroundMusic.pause();
	}
	backgroundMusicSwitchContent.classList.toggle('active');
}

// 设置游戏按键音
for(let note in base64Music){
	musicNoteArr.push(base64Music[note]);
}
musicNote.volume = 1.0;

// 定义画布
let canvas = document.querySelector('.canvas-game');
canvas.width = canvas.parentNode.parentNode.offsetWidth;
canvas.height = canvas.parentNode.parentNode.offsetHeight;
can = canvas.getContext('2d');
window.onresize = function(){
	canvas.width = canvas.parentNode.parentNode.offsetWidth;
	canvas.height = canvas.parentNode.parentNode.offsetHeight;
	if(backgroundColorArr[0]){
		backgroundColorArr.splice(0,backgroundColorArr.length);
		can.clearRect(0,0,canvas.width,canvas.height);
	}
}

// 绑定游戏操作事件
bindingEvent();
function bindingEvent(){
	for (let i = 0; i < piano.length; i++) {
		let j = i;
		let k = i;
		if(i > musicNoteArr.length - 1){
			j = (i + 1) % musicNoteArr.length;
		}
		if(i > 6){
			k = (i + 1) % 7;
		}
		// 触摸事件
		piano[i].ontouchstart = function() {
			event.preventDefault();
			gameMask.classList.add('active');
			isTouch = clearTimeout(isTouch);
			isTouch = setTimeout(function(){
				gameMask.classList.remove('active');
				isTouch = null;
			},1000);
			piano[i].style.backgroundColor = "#fff";
			setTimeout(function() {
				piano[i].style.backgroundColor = "transparent";
			}, 150)
			backgroundCount++;
			switch (k) {
				case 0:
					createpolygon();
					break;
				case 1:
					createsquareFly();
					break;
				case 2:
					createCircle();
					break;
				case 3:
					createcircleFly();
					break;
				case 4:
					createArc();
					break;
				case 5:
					createline();
					break;
				case 6:
					createsquareRotate();
					break;
			}
			musicNote.pause();
			musicNote.src = musicNoteArr[j];
			musicNote.play();
			temp = i;
			// 滑动事件
			document.ontouchmove = function() {
				gameMask.classList.add('active');
				isTouch = clearTimeout(isTouch);
				isTouch = setTimeout(function(){
					gameMask.classList.remove('active');
					isTouch = null;
				},1000);
				let currentElement = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
				let thePiano = [];
				for (let i = 0; i < piano.length; i++) {
					thePiano[i] = piano[i];
				}
				let index = thePiano.indexOf(currentElement);
				if(index != temp){
					let j = index;
					let k = index;
					if(index > musicNoteArr.length - 1){
						j = (index + 1) % musicNoteArr.length;
					}
					if(index > 6){
						k = (index + 1) % 7;
					}
					if (piano[index]) {
						piano[index].style.backgroundColor = "#fff";
						setTimeout(function() {
							piano[index].style.backgroundColor = "transparent";
						}, 150)
						backgroundCount++;
						switch (k) {
							case 0:
								createpolygon();
								break;
							case 1:
								createsquareFly();
								break;
							case 2:
								createCircle();
								break;
							case 3:
								createcircleFly();
								break;
							case 4:
								createArc();
								break;
							case 5:
								createline();
								break;
							case 6:
								createsquareRotate();
								break;
						}
						if(throttle == null){
							throttle = setTimeout(function(){
								musicNote.pause();
								musicNote.src = musicNoteArr[j];
								musicNote.play();
								throttle = null;
							},200)
						}
					}
					temp = index;
				}
			}
			document.ontouchend = function(){
				document.ontouchmove = null;
				document.ontouchend = null;
			}
		}
		// 鼠标事件
		piano[i].onmousedown = function() {
			event.preventDefault();
			gameMask.classList.add('active');
			isTouch = clearTimeout(isTouch);
			isTouch = setTimeout(function(){
				gameMask.classList.remove('active');
				isTouch = null;
			},1000);
			piano[i].style.backgroundColor = "#fff";
			setTimeout(function() {
				piano[i].style.backgroundColor = "transparent";
			}, 150)
			backgroundCount++;
			switch (k) {
				case 0:
					createpolygon();
					break;
				case 1:
					createsquareFly();
					break;
				case 2:
					createCircle();
					break;
				case 3:
					createcircleFly();
					break;
				case 4:
					createArc();
					break;
				case 5:
					createline();
					break;
				case 6:
					createsquareRotate();
					break;
			}
			musicNote.pause();
			musicNote.src = musicNoteArr[j];
			musicNote.play();
			temp = i;
			// 鼠标滑动
			document.onmousemove=function(){
				gameMask.classList.add('active');
				isTouch = clearTimeout(isTouch);
				isTouch = setTimeout(function(){
					gameMask.classList.remove('active');
					isTouch = null;
				},1000);
				let currentElement = document.elementFromPoint(event.clientX, event.clientY);
				let thePiano = [];
				for (let i = 0; i < piano.length; i++) {
					thePiano[i] = piano[i];
				}
				let index = thePiano.indexOf(currentElement);
				if(index != temp){
					let j = index;
					let k = index;
					if(index > musicNoteArr.length - 1){
						j = (index + 1) % musicNoteArr.length;
					}
					if(index > 6){
						k = (index + 1) % 7;
					}
					if (piano[index]) {
						piano[index].style.backgroundColor = "#fff";
						setTimeout(function() {
							piano[index].style.backgroundColor = "transparent";
						}, 150)
						backgroundCount++;
						switch (k) {
							case 0:
								createpolygon();
								break;
							case 1:
								createsquareFly();
								break;
							case 2:
								createCircle();
								break;
							case 3:
								createcircleFly();
								break;
							case 4:
								createArc();
								break;
							case 5:
								createline();
								break;
							case 6:
								createsquareRotate();
								break;
						}
						if(throttle == null){
							throttle = setTimeout(function(){
								musicNote.pause();
								musicNote.src = musicNoteArr[j];
								musicNote.play();
								throttle = null;
							},200)
						}
					}
					temp = index;
				}
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}
}

// 定时渲染画布
setInterval(function() {
	if (backgroundCount != 0 && backgroundCount % 50 == 0) {
		createbackgroundColor();
		backgroundCount++;
	}
	can.clearRect(0, 0, canvas.width, canvas.height);
	showbackgroundColor();
	showpolygon();
	showsquareFly();
	showCitcle();
	showcircleFly();
	showArc();
	showline();
	showsquareRotate();
}, 16)


// 多边形框
let polygonArr = [];

function createpolygon() {
	let polygon = {};
	polygon.r = Math.floor(Math.random() * Math.min(canvas.width, canvas.height) / 3 + Math.min(canvas.width, canvas.height) /
		6);
	polygon.x = Math.floor(canvas.width / 2);
	polygon.y = Math.floor(canvas.height / 2);
	polygon.red = Math.floor(Math.random() * 256);
	polygon.green = Math.floor(Math.random() * 256);
	polygon.blue = Math.floor(Math.random() * 256);
	polygon.lineWidth = Math.floor(Math.random() * 10);
	polygon.radianStart = Math.floor(Math.random() * 30);
	polygon.sideCount = Math.floor(Math.random() * 4 + 3);
	polygon.count = 0;
	polygonArr.push(polygon);
}

function showpolygon() {
	for (let i = 0, max = polygonArr.length; i < max; i++) {
		if (polygonArr[i]) {
			if (polygonArr[i].count < 60) {
				can.beginPath();
				can.moveTo(polygonArr[i].x + polygonArr[i].r * Math.cos(2 * Math.PI / 30 * polygonArr[i].radianStart), polygonArr[i]
					.y + polygonArr[i].r * Math.sin(2 * Math.PI / 30 * polygonArr[i].radianStart));
				for (let j = 1, max = polygonArr[i].sideCount; j < max; j++) {
					can.lineTo(polygonArr[i].x + polygonArr[i].r * Math.cos(2 * Math.PI / 30 * polygonArr[i].radianStart + 2 * Math.PI *
						j / polygonArr[i].sideCount), polygonArr[i].y + polygonArr[i].r * Math.sin(2 * Math.PI / 30 * polygonArr[i].radianStart +
						2 * Math.PI * j / polygonArr[i].sideCount));
				}
				can.closePath();
				can.strokeStyle = "rgb(" + polygonArr[i].red + "," + polygonArr[i].green + "," + polygonArr[i].blue + ")";
				can.lineWidth = polygonArr[i].lineWidth;
				can.stroke();
				polygonArr[i].r += 5;
				polygonArr[i].count += 1;
			} else {
				polygonArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 方形飞散
let squareFlyArr = [];

function createsquareFly() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	for (let i = 0; i < 10; i++) {
		let squareFly = {};
		squareFly.r = Math.floor(Math.random() * 10 + 10);
		squareFly.x = Math.floor(canvas.width / 2);
		squareFly.y = Math.floor(canvas.height / 2);
		squareFly.red = red;
		squareFly.green = green;
		squareFly.blue = blue;
		squareFly.radianStart = Math.floor(Math.random() * 30);
		squareFly.changeX = Math.floor((Math.random() - .5) * (canvas.width - squareFly.r) / 20);
		squareFly.changeY = Math.floor((Math.random() - .5) * (canvas.height - squareFly.r) / 20);
		squareFly.count = 0;
		squareFlyArr.push(squareFly);
	}
}

function showsquareFly() {
	for (let i = 0, max = squareFlyArr.length; i < max; i++) {
		if (squareFlyArr[i]) {
			if (squareFlyArr[i].count < 30) {
				can.beginPath();
				can.moveTo(squareFlyArr[i].x + squareFlyArr[i].r * Math.cos(2 * Math.PI / 30 * squareFlyArr[i].radianStart),
					squareFlyArr[i].y + squareFlyArr[i].r * Math.sin(2 * Math.PI / 30 * squareFlyArr[i].radianStart));
				for (let j = 1; j < 4; j++) {
					can.lineTo(squareFlyArr[i].x + squareFlyArr[i].r * Math.cos(2 * Math.PI / 30 * squareFlyArr[i].radianStart + 2 *
						Math.PI * j / 4), squareFlyArr[i].y + squareFlyArr[i].r * Math.sin(2 * Math.PI / 30 * squareFlyArr[i].radianStart +
						2 * Math.PI * j / 4));
				}
				can.closePath();
				can.fillStyle = "rgb(" + squareFlyArr[i].red + "," + squareFlyArr[i].green + "," + squareFlyArr[i].blue + ")";
				can.fill();
				if (squareFlyArr[i].count < 20) {
					squareFlyArr[i].x += squareFlyArr[i].changeX;
					squareFlyArr[i].y += squareFlyArr[i].changeY;
				}
				squareFlyArr[i].count += 1;
			} else {
				squareFlyArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 圆点
let circleArr = [];

function createCircle() {
	for (let i = 0; i < 5; i++) {
		let circle = {};
		circle.r = Math.floor(Math.random() * 10);
		circle.x = Math.floor(Math.random() * canvas.width);
		circle.y = Math.floor(Math.random() * canvas.height);
		circle.red = Math.floor(Math.random() * 256);
		circle.green = Math.floor(Math.random() * 256);
		circle.blue = Math.floor(Math.random() * 256);
		circle.count = 0;
		circleArr.push(circle);
	}
}

function showCitcle() {
	for (let i = 0; i < circleArr.length; i++) {
		if (circleArr[i]) {
			if (circleArr[i].count < 60) {
				can.beginPath();
				can.arc(circleArr[i].x, circleArr[i].y, circleArr[i].r, 0, 2 * Math.PI);
				can.closePath();
				can.fillStyle = "rgb(" + circleArr[i].red + "," + circleArr[i].green + "," + circleArr[i].blue + ")";
				can.fill();
				if (circleArr[i].count < 10) {
					circleArr[i].r += 2;
				} else if (circleArr[i].count < 15) {
					circleArr[i].r -= 1;
				} else if (circleArr[i].count > 50) {
					circleArr[i].r -= 2;
				} else if (circleArr[i].count > 45) {
					circleArr[i].r += 1;
				}
				circleArr[i].count += 1;
			} else {
				circleArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 圆圈飞散
let circleFlyArr = [];

function createcircleFly() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	for (let i = 0; i < 10; i++) {
		let circleFly = {};
		circleFly.r = Math.floor(Math.random() * 10 + 10);
		circleFly.x = Math.floor(canvas.width / 2);
		circleFly.y = Math.floor(canvas.height / 2);
		circleFly.red = red;
		circleFly.green = green;
		circleFly.blue = blue;
		circleFly.lineWidth = Math.floor(Math.random() * 5 + 5);
		circleFly.radianStart = Math.floor(Math.random() * 30);
		circleFly.changeX = Math.floor((Math.random() - .5) * (canvas.width - circleFly.r) / 20);
		circleFly.changeY = Math.floor((Math.random() - .5) * (canvas.height - circleFly.r) / 20);
		circleFly.count = 0;
		circleFlyArr.push(circleFly);
	}
}

function showcircleFly() {
	for (let i = 0, max = circleFlyArr.length; i < max; i++) {
		if (circleFlyArr[i]) {
			if (circleFlyArr[i].count < 30) {
				can.beginPath();
				can.arc(circleFlyArr[i].x, circleFlyArr[i].y, circleFlyArr[i].r, 0, Math.PI * 2)
				can.closePath();
				can.strokeStyle = "rgb(" + circleFlyArr[i].red + "," + circleFlyArr[i].green + "," + circleFlyArr[i].blue + ")";
				can.lineWidth = circleFlyArr[i].lineWidth;
				can.stroke();
				if (circleFlyArr[i].count < 20) {
					circleFlyArr[i].x += circleFlyArr[i].changeX;
					circleFlyArr[i].y += circleFlyArr[i].changeY;
				}
				circleFlyArr[i].count += 1;
			} else {
				circleFlyArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 中心圆弧
let arcArr = [];

function createArc() {
	let arc = {};
	arc.r = Math.floor(Math.random() * Math.min(canvas.width, canvas.height) / 6 + Math.min(canvas.width, canvas.height) /
		6);
	arc.x = Math.floor(canvas.width / 2);
	arc.y = Math.floor(canvas.height / 2);
	arc.red = Math.floor(Math.random() * 256);
	arc.green = Math.floor(Math.random() * 256);
	arc.blue = Math.floor(Math.random() * 256);
	arc.radianStart = Math.floor(Math.random() * 30);
	arc.radianEnd = arc.radianStart;
	arc.direction = Math.floor(Math.random() * 2);
	arc.count = 0;
	arcArr.push(arc);
}

function showArc() {
	for (let i = 0; i < arcArr.length; i++) {
		if (arcArr[i]) {
			if (arcArr[i].count < 60) {
				can.beginPath();
				can.moveTo(arcArr[i].x, arcArr[i].y);
				can.arc(arcArr[i].x, arcArr[i].y, arcArr[i].r, 2 * Math.PI / 30 * arcArr[i].radianStart, 2 * Math.PI / 30 * arcArr[
					i].radianEnd);
				can.closePath();
				can.fillStyle = "rgb(" + arcArr[i].red + "," + arcArr[i].green + "," + arcArr[i].blue + ")";
				can.fill();
				if (arcArr[i].direction === 0) {
					if (arcArr[i].count < 30) {
						arcArr[i].radianEnd += 1;
					} else {
						arcArr[i].radianStart += 1;
					}
				} else if (arcArr[i].direction === 1) {
					if (arcArr[i].count < 30) {
						arcArr[i].radianStart -= 1;
					} else {
						arcArr[i].radianEnd -= 1;
					}
				}
				arcArr[i].count += 1;
			} else {
				arcArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 线飞过
let lineArr = [];

function createline() {
	let line = {};
	let direction = Math.floor(Math.random() * 4);
	switch (direction) {
		case 0:
			line.originX = Math.floor(Math.random() * canvas.width);
			line.originY = 0;
			line.finalX = Math.floor(Math.random() * canvas.width);
			line.finalY = Math.floor(canvas.height);
			break;
		case 1:
			line.originX = Math.floor(Math.random() * canvas.width);
			line.originY = Math.floor(canvas.height);
			line.finalX = Math.floor(Math.random() * canvas.width);
			line.finalY = 0;
			break;
		case 2:
			line.originX = 0;
			line.originY = Math.floor(Math.random() * canvas.height);
			line.finalX = Math.floor(canvas.width);
			line.finalY = Math.floor(Math.random() * canvas.height);
			break;
		case 3:
			line.originX = Math.floor(canvas.width);
			line.originY = Math.floor(Math.random() * canvas.height);
			line.finalX = 0;
			line.finalY = Math.floor(Math.random() * canvas.height);
	}
	line.startX = line.originX;
	line.startY = line.originY;
	line.endX = line.originX;
	line.endY = line.originY;
	line.red = Math.floor(Math.random() * 256);
	line.green = Math.floor(Math.random() * 256);
	line.blue = Math.floor(Math.random() * 256);
	line.lineWidth = Math.floor(Math.random() * 10 + 10);
	line.count = 0;
	lineArr.push(line);
}

function showline() {
	for (let i = 0, max = lineArr.length; i < max; i++) {
		if (lineArr[i]) {
			if (lineArr[i].count < 60) {
				can.beginPath();
				can.moveTo(lineArr[i].startX, lineArr[i].startY);
				can.lineTo(lineArr[i].endX, lineArr[i].endY);
				can.strokeStyle = "rgb(" + lineArr[i].red + "," + lineArr[i].green + "," + lineArr[i].blue + ")";
				can.lineWidth = lineArr[i].lineWidth;
				can.stroke();
				if (lineArr[i].count < 30) {
					lineArr[i].endX += (lineArr[i].finalX - lineArr[i].originX) / 30;
					lineArr[i].endY += (lineArr[i].finalY - lineArr[i].originY) / 30;
				} else {
					lineArr[i].startX += (lineArr[i].finalX - lineArr[i].originX) / 30;
					lineArr[i].startY += (lineArr[i].finalY - lineArr[i].originY) / 30;
				}

				lineArr[i].count += 1;
			} else {
				lineArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 小六边形旋转
let squareRotateArr = [];

function createsquareRotate() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let squareRotate = {};
	squareRotate.R = Math.floor(Math.random() * Math.min(canvas.width, canvas.height) / 4 + Math.min(canvas.width, canvas.height) /
		4);
	squareRotate.r = Math.floor(Math.random() * 5);
	squareRotate.x = Math.floor(canvas.width / 2);
	squareRotate.y = Math.floor(canvas.height / 2);
	squareRotate.red = red;
	squareRotate.green = green;
	squareRotate.blue = blue;
	squareRotate.outsideRadianStart = Math.floor(Math.random() * 12);
	squareRotate.insideRadianStart = Math.floor(Math.random() * 30);
	squareRotate.count = 0;
	squareRotateArr.push(squareRotate);
}

function showsquareRotate() {
	for (let i = 0, max = squareRotateArr.length; i < max; i++) {
		if (squareRotateArr[i]) {
			if (squareRotateArr[i].count < 120) {
				for (let j = 0; j < 12; j++) {
					can.beginPath();
					can.moveTo(squareRotateArr[i].x + squareRotateArr[i].R * Math.cos(2 * Math.PI / 12 * squareRotateArr[i].outsideRadianStart +
							2 * Math.PI * j / 12) + squareRotateArr[i].r * Math.cos(2 * Math.PI / 30 * squareRotateArr[i].insideRadianStart),
						squareRotateArr[i].y + squareRotateArr[i].R * Math.sin(2 * Math.PI / 12 * squareRotateArr[i].outsideRadianStart +
							2 * Math.PI * j / 12) + squareRotateArr[i].r * Math.sin(2 * Math.PI / 30 * squareRotateArr[i].insideRadianStart)
					);
					for (let k = 1; k < 6; k++) {
						can.lineTo(squareRotateArr[i].x + squareRotateArr[i].R * Math.cos(2 * Math.PI / 12 * squareRotateArr[i].outsideRadianStart +
							2 * Math.PI * j / 12) + squareRotateArr[i].r * Math.cos(2 * Math.PI / 30 * squareRotateArr[i].insideRadianStart +
							2 * Math.PI * k / 6), squareRotateArr[i].y + squareRotateArr[i].R * Math.sin(2 * Math.PI / 12 *
							squareRotateArr[i].outsideRadianStart + 2 * Math.PI * j / 12) + squareRotateArr[i].r * Math.sin(2 * Math.PI /
							30 * squareRotateArr[i].insideRadianStart + 2 * Math.PI * k / 6));
					}
					can.closePath();
					can.fillStyle = "rgb(" + squareRotateArr[i].red + "," + squareRotateArr[i].green + "," + squareRotateArr[i].blue +
						")";
					can.fill();
				}
				if (squareRotateArr[i].count < 20) {
					squareRotateArr[i].insideRadianStart += .5;
					squareRotateArr[i].r += .5;
				} else if (squareRotateArr[i].count < 40) {
					squareRotateArr[i].insideRadianStart += .5;
				} else if (squareRotateArr[i].count < 50) {
					squareRotateArr[i].outsideRadianStart += .1;
				} else if (squareRotateArr[i].count < 60) {
					squareRotateArr[i].outsideRadianStart += .2;
				} else if (squareRotateArr[i].count < 70) {
					squareRotateArr[i].outsideRadianStart += .3;
				} else if (squareRotateArr[i].count < 80) {
					squareRotateArr[i].outsideRadianStart += .4;
				} else if (squareRotateArr[i].count < 90) {
					squareRotateArr[i].outsideRadianStart += .3;
				} else if (squareRotateArr[i].count < 100) {
					squareRotateArr[i].outsideRadianStart += .2;
				} else if (squareRotateArr[i].count < 110) {
					squareRotateArr[i].outsideRadianStart += .1;
				} else {

				}
				squareRotateArr[i].count += 1;
			} else {
				squareRotateArr.splice(i, 1);
				i--;
			}
		} else {
			break;
		}
	}
}

// 背景换色
let backgroundColorArr = [];

function createbackgroundColor() {
	let backgroundColor = {};
	backgroundColor.direction = Math.floor(Math.random() * 2);
	switch (backgroundColor.direction) {
		case 0:
			backgroundColor.originX = 0;
			backgroundColor.originY = 0;
			backgroundColor.finalX = Math.floor(canvas.width);
			backgroundColor.finalY = Math.floor(canvas.height);
			backgroundColor.endX = backgroundColor.originX;
			backgroundColor.endY = backgroundColor.finalY;
			break;
		case 1:
			backgroundColor.originX = 0;
			backgroundColor.originY = 0;
			backgroundColor.finalX = Math.floor(canvas.width);
			backgroundColor.finalY = Math.floor(canvas.height);
			backgroundColor.endX = backgroundColor.finalX;
			backgroundColor.endY = backgroundColor.originY;
			break;
	}
	backgroundColor.red = Math.floor(Math.random() * 256);
	backgroundColor.green = Math.floor(Math.random() * 256);
	backgroundColor.blue = Math.floor(Math.random() * 256);
	backgroundColor.backgroundColorWidth = Math.floor(Math.random() * 10 + 10);
	backgroundColor.count = 0;
	backgroundColorArr.push(backgroundColor);
}

function showbackgroundColor() {
	for (let i = 0, max = backgroundColorArr.length; i < max; i++) {
		if (i < backgroundColorArr.length - 2 && backgroundColorArr[i + 1].count == 60) {
			backgroundColorArr.splice(i, 1);
			i--;
			continue;
		}
		if (backgroundColorArr[i]) {
			can.beginPath();
			can.fillStyle = "rgb(" + backgroundColorArr[i].red + "," + backgroundColorArr[i].green + "," + backgroundColorArr[i]
				.blue + ")";
			can.fillRect(backgroundColorArr[i].originX, backgroundColorArr[i].originY, backgroundColorArr[i].endX,
				backgroundColorArr[i].endY);
			if (backgroundColorArr[i].count < 60) {
				backgroundColorArr[i].endX += (backgroundColorArr[i].finalX - backgroundColorArr[i].originX) / 60;
				backgroundColorArr[i].endY += (backgroundColorArr[i].finalY - backgroundColorArr[i].originY) / 60;
				backgroundColorArr[i].count += 1;
			}
		} else {
			break;
		}
	}
}
