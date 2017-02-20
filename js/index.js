$(document).ready(function() {
	//JQ初始化
	var aLi=$('.jiang').css('display','none');
	var bLi=$('.jiang2').css('display','none');
	var cLi=$('.jiang3').css('display','none');
	var abtn=$('.btn');
	var bbtn=$('.btn2');
	var cbtn=$('.btn3');

	//当鼠标点击btn的时候，aLi列表显示
	var onOff=true;
	function HideOrShow(){
		if(onOff==true){

		//当开关变量是true的时候，ali显示，文字内容变成隐藏,背景图变成上三角
		aLi.stop().slideDown();
		abtn.css('background-image','url(../img/up.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=false;
	}else{

		//当开关变量是false的时候，ali隐藏，文字内容变成显示,背景图变成下三角
		aLi.stop().slideUp();
		abtn.css('background-image','url(../img/down.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=true;

	    }
    }

    function HideOrShow2(){
		if(onOff==true){

		//当开关变量是true的时候，ali显示，文字内容变成隐藏,背景图变成上三角
		bLi.stop().slideDown();
		bbtn.css('background-image','url(../img/up_2.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=false;
	}else{

		//当开关变量是false的时候，ali隐藏，文字内容变成显示,背景图变成下三角
		bLi.stop().slideUp();
		bbtn.css('background-image','url(../img/down_2.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=true;

	    }
    }

    function HideOrShow3(){
		if(onOff==true){

		//当开关变量是true的时候，ali显示，文字内容变成隐藏,背景图变成上三角
		cLi.stop().slideDown();
		cbtn.css('background-image','url(../img/up_3.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=false;
	}else{

		//当开关变量是false的时候，ali隐藏，文字内容变成显示,背景图变成下三角
		cLi.stop().slideUp();
		cbtn.css('background-image','url(../img/down_3.png)');

		//正面的事情做完以后，把开关变量变成false
		onOff=true;

	    }
    }
	abtn.click(HideOrShow);
	bbtn.click(HideOrShow2);
	cbtn.click(HideOrShow3);
});