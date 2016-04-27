'use strict';
function allproducts_onload(){
    
    //无限加载商品
    $(window).scroll(function(){
        if($(window).scrollTop()>=$(document).height()-$(window).height()-70){  //滚动条距离底部不足70px时触发
            $('.products_products ul').append('<li><div class="product_pic"><a href="#/product/details.html"><img src="../images/index/product1.png" alt=""></a></div><div class="product_name"><a href="#/product/details.html">拉卡拉收款宝 手机pos机移动刷卡</a></div><div class="price_info"><div class="price fl">￥199.00</div><div class="sales fl">已售<span>244</span>笔</div><i class="icon-shouchang-1 shoucang fr"></i></div></li><li><div class="product_pic"><a href="#/product/details.html"><img src="../images/index/product1.png" alt=""></a></div><div class="product_name"><a href="#/product/details.html">拉卡拉收款宝 手机pos机移动刷卡</a></div><div class="price_info"><div class="price fl">￥199.00</div><div class="sales fl">已售<span>244</span>笔</div><i class="icon-shouchang-1 shoucang fr"></i></div></li>')
        }
    });
    
    //排序
    $(document).on('click','.allproducts_wrap .sort',function(e){
        e.stopPropagation();
        if($(this).find('.sort_content').hasClass('hide')){
            $('.sort_content').removeClass('hide')
        }else{$(this).find('.sort_content').removeClass('hide')}
    });
    
    //收藏商品
    $(document).on('click','.allproducts_wrap .shoucang',function(e){
        e.stopPropagation();
        if($(this).hasClass('icon-shouchang-1')){
            $(this).removeClass('icon-shouchang-1');
            $(this).addClass('icon-shouchang');
        }else{
            $(this).addClass('icon-shouchang-1');
            $(this).removeClass('icon-shouchang');
        }
    });
}
