'use strict';
function allproducts_onload(){
    
    //排序
    $(document).on('click','.allproducts_wrap .sort',function(e){
        e.stopPropagation();
        if($(this).find('.sort_content').hasClass('hide')){
            $('.sort_content').removeClass('hide')
        }else{$(this).find('.sort_content').removeClass('hide')}
    });
    

}
