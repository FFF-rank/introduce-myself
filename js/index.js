// ---------- 一、全局变量 ----------

let navIndex = 0; //当前导航索引
let isFullScreen = false; //当前是否处于全屏
let navItems = document.querySelectorAll('.nav-item');
let mainItems = document.querySelectorAll('.main-item');
let headerLeft = document.querySelector('.header-left');
let messageMask = document.querySelector('.message-mask');
let messageCount = document.querySelector('.message-count');
let messageRead = document.querySelector('.message-read');
let music = document.querySelector('.music');
let musicPlay = document.querySelector('.music-play');
let musicPause = document.querySelector('.music-pause');

// ---------- 一、全局事件 ----------

// fastclick
// if ('addEventListener' in document) {
// 	document.addEventListener('DOMContentLoaded', function() {
// 		FastClick.attach(document.body);
// 	}, false);
// }

// 清除浏览器默认滑动行为
document.ontouchmove = function(){
	event.preventDefault();
}
// 进入首页
navJump(navIndex);
// 底部导航栏点击切换
for(let i = 0, max = navItems.length; i < max; i++){
	navItems[i].addEventListener('click',function(){
		navJump(i);
		// 切换页面时回到游戏进入前状态
		gameBegin.classList.remove('hide');
		if(!backgroundMusic.paused){
			backgroundMusic.pause();
			backgroundMusicSwitchContent.classList.toggle('active');
		}
	});
	navItems[i].addEventListener('mousedown',function(){
		event.preventDefault();
	});
};
// 音乐播放
music.volume = .6;
musicPlay.addEventListener('click',function(){
	// 暂停游戏背景音
	if(!backgroundMusic.paused){
		backgroundMusic.pause();
		backgroundMusicSwitchContent.classList.toggle('active');
	}
	// 播放音乐
	musicPlay.classList.toggle('hide');
	musicPause.classList.toggle('hide');
	music.play();
});
musicPause.addEventListener('click',function(){
	musicPlay.classList.toggle('hide');
	musicPause.classList.toggle('hide');
	music.pause();
});
// 消息
headerLeft.addEventListener('click',function(){
	messageMask.classList.add('active');
	messageCount.classList.add('hide');
})
messageRead.addEventListener('click',function(){
	event.cancelBubble=true;
	messageMask.classList.remove('active');
	messageRead.classList.add('active');
})

// ---------- 一、全局函数 ----------

// 底部导航栏点击切换
function navJump(index){
	// 导航栏切换
	navItems[navIndex].classList.remove('active');
	navItems[index].classList.add('active');
	// 主体内容切换
	mainItems[navIndex].classList.remove('active');
	mainItems[index].classList.add('active');
	
	navIndex = index;
};

// ---------- 二、首页变量 ----------

let homepagePhotoBox = document.querySelector('.homepage-photo-box');
let homepagePhotos = document.querySelectorAll('.homepage-photo');


// ---------- 二、首页事件 ----------

// 照片全屏查看
photoFullScreen(homepagePhotos);

// ---------- 二、首页函数 ----------

// 照片全屏查看
// @param：arr，需要添加全屏查看功能的图片数组
function photoFullScreen(arr){
	for(let i = 0, max = arr.length; i < max; i++){
		arr[i].addEventListener('click',function(){
			event.cancelBubble=true;
			photoClick(arr[i]);
		});
	}
	function photoClick(img){
		if(!isFullScreen){
			img.parentNode.classList.add('full-screen');
			img.classList.add('full-screen');
			isFullScreen = true;
			img.parentNode.addEventListener('click',function(){
				img.parentNode.classList.remove('full-screen');
				img.classList.remove('full-screen');
				isFullScreen = false;
			});
		}else{
			img.parentNode.classList.remove('full-screen');
			img.classList.remove('full-screen');
			isFullScreen = false;
		}
	}
}

// ---------- 四、工作经历变量 ----------

let workExperienceSwiper = document.querySelector('.work-experience-swiper');
let workExperienceItem = document.querySelectorAll('.work-experience-item');
let pageNumberItem = document.querySelectorAll('.page-number-item');
let turnLeft = document.querySelector('.turn-left');
let turnRight = document.querySelector('.turn-right');
let workExperienceIndex = 0;
let originX = workExperienceSwiper.offsetLeft;

// ---------- 四、工作经历事件 ----------

// 显示左右切换按钮
showArrow();
// 点击切换工作经历
turnLeft.addEventListener('click',function(){
	stopTransition();
	workExperienceSwiper.style.transition = '.3s';
	originX = originX + workExperienceItem[0].offsetWidth;
	workExperienceSwiper.style.left = originX + 'px';
	workExperienceIndex--;
	showArrow();
})
turnRight.addEventListener('click',function(){
	stopTransition();
	workExperienceSwiper.style.transition = '.3s';
	originX = originX - workExperienceItem[0].offsetWidth;
	workExperienceSwiper.style.left = originX + 'px';
	workExperienceIndex++;
	showArrow();
})
// 滑动切换工作经历
workExperienceSwiper.addEventListener('touchstart',function(){
	stopTransition();
	event.preventDefault();
	let startX = event.touches[0].clientX;
	document.ontouchmove = function(){
		let moveX = event.touches[0].clientX;
		workExperienceSwiper.style.left = originX + moveX - startX + 'px';
	};
	document.ontouchend = function(){
		workExperienceSwiper.style.transition = '.3s';
		if(workExperienceSwiper.offsetLeft <= 0 && workExperienceSwiper.offsetLeft >= -workExperienceSwiper.offsetWidth + workExperienceItem[0].offsetWidth){
			if(workExperienceSwiper.offsetLeft - originX <= -workExperienceItem[0].offsetWidth/10){
				originX = originX - workExperienceItem[0].offsetWidth;
				workExperienceSwiper.style.left = originX + 'px';
				workExperienceIndex++;
			}else if(workExperienceSwiper.offsetLeft - originX >= workExperienceItem[0].offsetWidth/10){
				originX = originX + workExperienceItem[0].offsetWidth;
				workExperienceSwiper.style.left = originX + 'px';
				workExperienceIndex--;
			}else{
				workExperienceSwiper.style.left = originX + 'px';
			}
		}else{
			workExperienceSwiper.style.left = originX + 'px';
		}
		showArrow();
		document.ontouchmove = null;
		document.ontouchend = null;
	}
});


// ---------- 四、工作经历函数 ----------

// 结束当前切换动画
function stopTransition(){
	workExperienceSwiper.style.transition = '0s';
	workExperienceSwiper.style.left = originX + 'px';
}
// 显示左右切换按钮/页码切换
function showArrow(){
	turnLeft.classList.remove('hide');
	turnRight.classList.remove('hide');
	if(originX >= 0){
		turnLeft.classList.add('hide');
	}else if(originX <= -workExperienceSwiper.offsetWidth + workExperienceItem[0].offsetWidth){
		turnRight.classList.add('hide');
	}
	// 页码切换
	for(let i = 0, max = pageNumberItem.length; i < max; i++){
		pageNumberItem[i].classList.remove('active');
	}
	pageNumberItem[workExperienceIndex].classList.add('active');
}

// ---------- 五、技术栈变量 ----------
let technologyItems = document.querySelectorAll('.technology-item');

// ---------- 五、技术栈事件 ----------
// 点击翻转
for(let i = 0, max = technologyItems.length; i < max; i++){
	technologyItems[i].addEventListener('click',function(){
		technologyItems[i].classList.toggle('active');
	})
}
