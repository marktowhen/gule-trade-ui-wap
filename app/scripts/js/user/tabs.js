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

function tab3() {
	$(".cd2-select").click(
		function(){
			if($(this).hasClass("cur")){
				$(this).removeClass("cur");
			}else{
				$(this).addClass("cur"); 
			}
		}
	);
}

function tab4() {
	$(".eceipt-address ul li .eceipt-address-set").click(
		function(){
			$(this).addClass("cur").parent().parent().siblings().children().children(".eceipt-address-set").removeClass("cur"); 
		}
	);
}

function tab5() {
	$(".user-set-mans").click(
		function(){
			$(this).addClass("cur").siblings().removeClass("cur"); 
		}
	);
}