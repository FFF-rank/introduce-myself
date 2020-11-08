// ---------- 个人信息填写 ----------

// 标签页图片
document.querySelector('.tab-image').href ='./img/homepage/微信头像.jpg';
// 版本号
updateText('.edition','2.4');
// github地址
updateText('.GitHub-address','https://github.com/FFF-rank/introduce-myself');

// ---------- 首页信息 ----------
// 照片
updateImage('.homepage-photo','./img/homepage/微信头像.jpg');
// 姓名
updateText('.homepage-name','黄理志');
// 年龄
updateText('.homepage-age','26');
// 联系电话
updateText('.homepage-tel','13459221068');
// 邮箱
updateText('.homepage-email','529012379@qq.com');
// 学历
updateText('.homepage-qualification','本科');
// 毕业院校
updateText('.homepage-school','哈尔滨工程大学');
// 专业
updateText('.homepage-major','电子信息工程');
// 求职意向
updateText('.homepage-target','web前端');

// ---------- 工作经历信息 ----------
// 左翻页
updateImage('.turn-left','./img/work-experience/返回1.svg');
// 右翻页
updateImage('.turn-right','./img/work-experience/返回2.svg');
// 金鹭logo
updateImage('.GESAC-logo','./img/work-experience/GESAC-logo.png');
// 金鹭名称
updateText('.company-name-GESAC','厦门金鹭特种合金有限公司');
// 金鹭时间
updateText('.work-time-GESAC','2017.10 ~ 2020.3');
// 金鹭岗位
updateText('.job-name-GESAC','品质工程师');
// 金鹭工作内容
updateText('.work-content-GESAC','工艺流程标准化，检验技术管理，产品制程优化，良率提升');
// 京东方logo
updateImage('.BOE-logo','./img/work-experience/BOE-logo.jpg');
// 京东方名称
updateText('.company-name-BOE','福州京东方光电科技有限公司');
// 京东方时间
updateText('.work-time-BOE','2016.7 ~ 2017.10');
// 京东方岗位
updateText('.job-name-BOE','品质工程师');
// 京东方工作内容
updateText('.work-content-BOE','新品质量标准制定，量产品品质管理，FA分析');
// 学习logo
updateImage('.learn-logo','./img/work-experience/图书.svg');
// 学习时间
updateText('.work-time-learn','2020.4 ~ 2020.11');
// 工作状态
updateText('.job-name-learn','辞职学习');
// 学习内容
updateText('.work-content-learn','Web前端知识');

// ---------- 技术栈信息 ----------
// html图片
updateImage('.html-image','./img/technology-stack/HTML5.svg');
// html内容
updateText('.html-detail','了解常见网页布局，结构、样式、行为分离，了解 Canvas');
// css图片
updateImage('.css-image','./img/technology-stack/CSS3.svg');
// css内容
updateText('.css-detail','了解 CSS 的响应式布局，2D/3D 动画，预处理器 Less');
// javascript图片
updateImage('.javascript-image','./img/technology-stack/JavaScript.svg');
// javascript内容
updateText('.javascript-detail','了解 DOM 及 BOM，了解 jQuery 的使用');
// vue图片
updateImage('.vue-image','./img/technology-stack/Vue.svg');
// vue内容
updateText('.vue-detail','了解 Vue 的组件化，Vue Router，Vuex，Vue CLI，及官方推荐库 axios');

// ---------- 信息填写函数 ----------
// 图片路径填写
function updateImage(selector,path){
	document.querySelector(selector).src=path;
}
// 文本填写
function updateText(selector,message){
	document.querySelector(selector).innerText = message;
}
