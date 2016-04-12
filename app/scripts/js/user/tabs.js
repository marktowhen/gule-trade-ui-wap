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
//user-info.js
function tab5() {
	$(".user-info-mans").click(
		function(){
			$(this).addClass("cur").siblings().removeClass("cur"); 
		}
	);
}

function tab6() {
	$(".add-set").click(
		function(){
			if($(this).hasClass("cur")){
				$(this).removeClass("cur");
			}else{
				$(this).addClass("cur"); 
			}
		}
	);
}

function tab7() {
	$("li.add-select").click(
		function(){
			$(this).addClass("cur");
		}
	);	
}

// 购物车弹出框的增减商品
function tab8() {
	//增减商品数量
    $('.cd2-left').click(function(){
        var num=parseInt($(this).next().text());
        if(num != 1){
            num--;
            $(this).next().text(num)
        }
    });
    $('.cd2-right').click(function(){
        var num=parseInt($(this).prev().text());
        num++;
        $(this).prev().text(num)
    });
}