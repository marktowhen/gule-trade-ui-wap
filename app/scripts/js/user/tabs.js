"use strict";

//product-details/产品图文切换
function tab1(){
	$(document).on('click','.pd4-hd ul li',function(){
		$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".pd4-bd").children().children("li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	});
}
// user/订单、收藏、、切换
function tab2() {
	$(document).on('click','.user-box3 ul a li',function(){
		$(this).addClass("cur").parent().siblings().children().removeClass("cur");
	});
}

//eceipt-address/设置默认收货地址
function tab3() {
	$(document).on('click','.eceipt-address ul li .eceipt-address-set',function(){
		$(this).addClass("cur").parent().parent().siblings().children().children(".eceipt-address-set").removeClass("cur"); 
	});
}
//user-info/性别切换
function tab4() {
	$(document).on('click','.user-info-mans',function(){
		$(this).addClass("cur").siblings().removeClass("cur"); 
	});
}
// add-address/添加新地址页面
function tab5() {
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

// 购物车弹出框
function tab6() {
    $(document).on('click','.cd2-left',function(){
		var num=parseInt($(this).next().text());
        if(num != 1){
            num--;
            $(this).next().text(num)
        } 
	});	

    $(document).on('click','.cd2-right',function(){
		var num=parseInt($(this).prev().text());
        num++;
        $(this).prev().text(num)
	});

	$(document).on('click','.cd2-select',function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
		}else{
			$(this).addClass("cur"); 
		}
	}); 
}
