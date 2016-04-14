'use strict';
function shoppingcart_onload(){
    //手机触摸后显示删除商品
    var start_x=0;
    var stop_x=0;
    var move_x=0;
    $(document).on('touchstart','.shoppingcart_products ul li',function(e){
        start_x = e.originalEvent.targetTouches[0].clientX;
    });
    $(document).on('touchmove','.shoppingcart_products ul li',function(e){
        stop_x = e.originalEvent.touches[0].clientX;
        move_x=stop_x-start_x;
        if(move_x<-5){
            $(this).find('.product_body').velocity({translateX:'-16.666667%'},{duration: 100});         
        }else if(move_x>5){
            $(this).find('.product_body').velocity({translateX:'0'},{duration: 100});
        }
    });
    
    //点击选中或取消商品
    $(document).on('click','.choose i',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    
    //增减商品数量
    $(document).on('click','i.reduce',function(){
        var num=parseInt($(this).next().text());
        if(num != 1){
            num--;
            $(this).next().text(num)
        }
    });
    $(document).on('click','i.add',function(){
        var num=parseInt($(this).prev().text());
        num++;
        $(this).prev().text(num)
    });
    
    //全选
    $(document).on('click','.check_all i',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.choose i').removeClass('active')
        }else{
            $(this).addClass('active');
            $('.choose i').addClass('active')
        }
    });
}
    
