'use strict';
function groupbuy_onload(){
    var windowheight=$(window).height();
    $(window).scroll(function(){
        if($(window).scrollTop()>=$(document).height()-$(window).height()-70){
            $('.products ul').append("<li class='fs12'><div class='product_pic col-40 fl'><a href='#/product-details.html'><img src='../images/index/product1.png' alt=''></a></div><div class='groupbuy_info col-60 fl'><div class='groupbuy_title'><a href='#/product-details.html'>拉卡拉收款宝 手机移动pos机刷卡器实时到账 信用卡还款芯片</a></div><div class='groupbuy_sold'>已售<span class='fs14'>15856</span> 件</div><div class='startgroupbuy fs12'><div class='groupprice col-60 fl'>￥200.00</div><div class='groupgo col-35 fl'><a href=''>去开团 ＞</a></div></div></div></li><li class='fs12'><div class='product_pic col-40 fl'><a href='#/product-details.html'><img src='../images/index/product1.png' alt=''></a></div><div class='groupbuy_info col-60 fl'><div class='groupbuy_title'><a href='#/product-details.html'>拉卡拉收款宝 手机移动pos机刷卡器实时到账 信用卡还款芯片</a></div><div class='groupbuy_sold'>已售<span class='fs14'>15856</span> 件</div><div class='startgroupbuy fs12'><div class='groupprice col-60 fl'>￥200.00</div><div class='groupgo col-35 fl'><a href=''>去开团 ＞</a></div></div></div></li>")
        }
    });
    $('.groupbuy_wrap .sort').click(function(){
        if($('.groupbuy_wrap .sort_content').hasClass('hide')){
            $('.groupbuy_wrap .sort_content').removeClass('hide')
        }else{$('.groupbuy_wrap .sort_content').addClass('hide')}
    });
    
}