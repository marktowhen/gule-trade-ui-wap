'use strict';
function auction_details() {
	$(document).on('click','.ad2-hd ul li',function(){
		$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings().children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	});
	
	$(document).on('click','.ad-offer-hd',function(){
		if($(this).hasClass("cur")){
				$(this).removeClass("cur");
				$(".ad-offer-bd").slideUp();
			}else{
				$(this).addClass("cur");
				$(".ad-offer-bd").slideDown();
			}
	});
}