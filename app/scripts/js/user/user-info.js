"use strict";
//user-info/性别切换
function user_info() {
	$(document).on('click','.user-info-mans',function(){
		$(this).addClass("cur").siblings().removeClass("cur"); 
	});

	$(document).on('click','.user-info-infos ul li',function(){
		$(this).addClass("cur"); 
	});
    $(".user-info").height($(window).height());
}