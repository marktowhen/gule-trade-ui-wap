'use strict';
function allproducts_onload(){
    
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
