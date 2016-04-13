function order_onload(){
    //暂时定义一些html代码
    var all_html=$('ul').html();
    var nopay_html="<li class='nopay'><div class='checkorder fl'><i class='active'></i></div><div class='order_pic col-25 fl'><img src='../images/index/product1.png' alt=''></div><div class='order_info_wrap fs12 fl'><div class='order_info_body'><div class='order_title col-85 fl'>拉卡拉收款宝手机pos机 信用卡刷</div><div class='order_num col-10 fl'>×1</div><div class='order_price col-85 fl'>￥228.00<span class='order_freight'>(含运费￥0.00)</span></div></div></div><div class='order_btn fl'><a href='' class='order_pay fs12 fr'>支付</a><button class='order_cancel fs12 fr'>取消订单</button></div></li><li class='nopay'><div class='checkorder fl'><i class='active'></i></div><div class='order_pic col-25 fl'><img src='../images/index/product1.png' alt=''></div><div class='order_info_wrap fs12 fl'><div class='order_info_body'><div class='order_title col-85 fl'>拉卡拉收款宝手机pos机 信用卡刷</div><div class='order_num col-10 fl'>×1</div><div class='order_price col-85 fl'>￥228.00<span class='order_freight'>(含运费￥0.00)</span></div></div></div><div class='order_btn fl'><a href='' class='order_pay fs12 fr'>支付</a><button class='order_cancel fs12 fr'>取消订单</button></div></li><li class='nopay'><div class='checkorder fl'><i class='active'></i></div><div class='order_pic col-25 fl'><img src='../images/index/product1.png' alt=''></div><div class='order_info_wrap fs12 fl'><div class='order_info_body'><div class='order_title col-85 fl'>拉卡拉收款宝手机pos机 信用卡刷</div><div class='order_num col-10 fl'>×1</div><div class='order_price col-85 fl'>￥228.00<span class='order_freight'>(含运费￥0.00)</span></div></div></div><div class='order_btn fl'><a href='' class='order_pay fs12 fr'>支付</a><button class='order_cancel fs12 fr'>取消订单</button></div></li><li class='nopay'><div class='checkorder fl'><i class='active'></i></div><div class='order_pic col-25 fl'><img src='../images/index/product1.png' alt=''></div><div class='order_info_wrap fs12 fl'><div class='order_info_body'><div class='order_title col-85 fl'>拉卡拉收款宝手机pos机 信用卡刷</div><div class='order_num col-10 fl'>×1</div><div class='order_price col-85 fl'>￥228.00<span class='order_freight'>(含运费￥0.00)</span></div></div></div><div class='order_btn fl'><a href='' class='order_pay fs12 fr'>支付</a><button class='order_cancel fs12 fr'>取消订单</button></div></li>";
    
    //订单分类导航点击事件
    $('.order_nav>div').on('click',function(){
        if($(this).hasClass('all')){
            $('.order_body ul').html('');
            $(all_html).appendTo($('.order_body ul'));
            $('.order_wrap .merge_pay').addClass('hide')
        }else if($(this).hasClass('non-payment')){
            $('.order_body ul').html('');
            $(nopay_html).appendTo($('.order_body ul'));
            $('.order_wrap .merge_pay').removeClass('hide')
        };
    });
    
    //头部导航点击样式改变
    $('.order_wrap .order_nav>div').click(function(e){
        e.stopPropagation();
        if(!$(this).hasClass('active')){
            $('.order_wrap .order_nav>div').removeClass('active');
            $(this).addClass('active');
        }
    });
    
    //选中订单勾选对号事件 
    $('.checkorder i').on('click',function(e){
        e.stopPropagation();
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    })
};