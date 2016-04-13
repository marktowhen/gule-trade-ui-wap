'use strict';
function allproducts_onload(){
    var windowheight=$(window).height();
    $(window).scroll(function(){
        if($(window).scrollTop()>=$(document).height()-$(window).height()-70){
            $('.products_products ul').append("<li><div class='product_pic'><img src='../images/index/product1.png' alt=''></div><div class='product_name'><b>拉卡拉收款宝 手机pos机移动刷卡</b></div><div class='price_info'><div class='price fl'>￥199.00</div><div class='sales fl'>已售出<span>244</span>笔</div></div></li><li><div class='product_pic'><img src='../images/index/product1.png' alt=''></div><div class='product_name'><b>拉卡拉收款宝 手机pos机移动刷卡</b></div><div class='price_info'><div class='price fl'>￥199.00</div><div class='sales fl'>已售出<span>244</span>笔</div></div></li>")
        }
    });
    $('.allproducts_wrap .sort').click(function(e){
        e.stopPropagation();
        if($(this).find('.sort_content').hasClass('hide')){
            $('.sort_content').removeClass('hide')
        }else{$(this).find('.sort_content').addClass('hide')}
    })

}
    