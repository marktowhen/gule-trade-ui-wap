"use strict";
function partner() {

	$(document).on('click','.partner4-bd ul li',function(){
		if($(this).hasClass("cur")){
				$(this).removeClass("cur");
		}else{
			$(this).addClass("cur").siblings().removeClass("cur");
		}
	});
}