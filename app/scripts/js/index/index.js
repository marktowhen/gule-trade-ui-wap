'use strict';
function index_onload(){  
    //无限加载热销产品
    var windowheight=$(window).height();
    $(window).scroll(function(){
        if($(window).scrollTop()>=$(document).height()-$(window).height()-70){
            $('.index_products ul').append("<li><div class='product_pic'><a href='#/product-details.html'><img src='../../images/index/product1.png' alt=''></a></div><div class='product_name'><a href='#/product-details.html'><b>拉卡拉收款宝 手机pos机移动刷卡</b></a></div><div class='price_info'><div class='price fl'>￥199.00</div><div class='sales fr'>已售出<span>244</span>笔</div></div></li><li><div class='product_pic'><a href='#/product-details.html'><img src='../../images/index/product1.png' alt=''></a></div><div class='product_name'><a href='#/product-details.html'><b>拉卡拉收款宝 手机pos机移动刷卡</b></a></div><div class='price_info'><div class='price fl'>￥199.00</div><div class='sales fr'>已售出<span>244</span>笔</div></div></li>")
        }
    });
};