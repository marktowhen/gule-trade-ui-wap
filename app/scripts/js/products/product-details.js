"use strict";
//product-details/产品图文切换
function product_details(){
	$(document).on('click','.pd4-hd ul li',function(){
		$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".pd4-bd").children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	});

	$(document).on('click','.pd1-right',function(){
		if($(this).hasClass("cur")){
				$(this).removeClass("cur");
			}else{
				$(this).addClass("cur");
			}
	});
}