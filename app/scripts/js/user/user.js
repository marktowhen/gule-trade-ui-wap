"use strict";
// user/订单、收藏、、切换
function user() {
	$(document).on('click','.user-box3 ul a li',function(){
		$(this).addClass("cur").parent().siblings().children().removeClass("cur");
	});
}