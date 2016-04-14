"use strict";
//user-info/性别切换
function user_info() {
	$(document).on('click','.user-info-mans',function(){
		$(this).addClass("cur").siblings().removeClass("cur"); 
	});
}