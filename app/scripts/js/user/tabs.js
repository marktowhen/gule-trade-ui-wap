"use strict";
//product-details.js
function tab1() {
	$(".pd4-hd ul li").click(
			function(){
				$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".pd4-bd").children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
			}
		);
}
// user.js
function tab2() {
	$(".user-box3 ul a li").click(
			function(){
				$(this).addClass("cur").parent().siblings().children().removeClass("cur");
			}
		);
}
//add-cart-dialog.js
function tab3() {
	$(".cd2-select").click(
		function(){
			if($(this).hasClass("cur")){
				$(this).removeClass("cur");
			}else{
				$(this).addClass("cur"); 
			}
		}
	);
}
//eceipt-address.js
function tab4() {
	$(".eceipt-address ul li .eceipt-address-set").click(
		function(){
			$(this).addClass("cur").parent().parent().siblings().children().children(".eceipt-address-set").removeClass("cur"); 
		}
	);
}
//user-set.js
function tab5() {
	$(".user-set-mans").click(
		function(){
			$(this).addClass("cur").siblings().removeClass("cur"); 
		}
	);
}