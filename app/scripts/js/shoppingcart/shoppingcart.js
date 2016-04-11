'use strict';
function shoppingcart_onload(){
    //手机触摸后显示删除商品
    $('.choose').height($('.product_pic').height());
    $('.shoppingcart_products .product_content').height($('.product_pic').height());
    var start_x=0;
    var stop_x=0;
    var move_x=0;
    $('.shoppingcart_products ul li').on('touchstart',function(e){
        start_x = e.originalEvent.targetTouches[0].clientX;
    });
    $('.shoppingcart_products ul li').on('touchmove',function(e){
        stop_x = e.originalEvent.touches[0].clientX;
        move_x=stop_x-start_x;
        if(move_x<-15){
            $(this).find('.product_body').velocity({translateX:'-16.666667%'},{duration: 100});         
        }else if(move_x>15){
            $(this).find('.product_body').velocity({translateX:'0'},{duration: 100});
        }
    });
    
    //点击选中或取消商品
    $('.choose i').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    
    //增减商品数量
    $('i.reduce').click(function(){
        var num=parseInt($(this).next().text());
        if(num != 1){
            num--;
            $(this).next().text(num)
        }
    });
    $('i.add').click(function(){
        var num=parseInt($(this).prev().text());
        num++;
        $(this).prev().text(num)
    });
    
    //全选
    $('.check_all i').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
}
    
