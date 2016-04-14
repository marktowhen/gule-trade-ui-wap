"use strict";
//product-details/产品图文切换
function product_details(){
	$(document).on('click','.pd4-hd ul li',function(){
		$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".pd4-bd").children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	});
}