"use strict";

function tab1() {
	$(".pd4-hd ul li").click(
			function(){
				$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".pd4-bd").children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
			}
		);
}

function tab2() {
	$(".user-box3 ul li").click(
			function(){
				$(this).addClass("cur").siblings().removeClass("cur");
			}
		);
}