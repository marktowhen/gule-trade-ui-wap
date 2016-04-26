"use strict";
function partner() {
	$(".partner4-bd ul li").click(
		function(){
			if($(this).hasClass("cur")){
				$(this).removeClass("cur");
			}else{
				$(this).addClass("cur").siblings().removeClass("cur");
			}
		}
	);
}