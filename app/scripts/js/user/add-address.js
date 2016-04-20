"use strict";
// add-address/添加新地址页面
function add_address() {
	$(document).on('click','.add-set',function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
		}else{
			$(this).addClass("cur"); 
		}
	});

	$(document).on('click','li.add-select',function(){
		$(this).addClass("cur"); 
	});
}