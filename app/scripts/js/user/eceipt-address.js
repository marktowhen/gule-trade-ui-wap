"use strict";
//eceipt-address/设置默认收货地址
function eceipt_address() {
	$(document).on('click','.eceipt-address ul li .eceipt-address-set',function(){
		$(this).addClass("cur").parent().parent().siblings().children().children(".eceipt-address-set").removeClass("cur"); 
	});
}