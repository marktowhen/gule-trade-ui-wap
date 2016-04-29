function shareproduct_onload(){
    $(document).on('click','.shareproduct_wrap .share',function(){
        $('.shareproduct_wrap .cover').removeClass('hide')
        $('.shareproduct_wrap .pop_up').removeClass('hide')
    });
    $(document).on('click','.shareproduct_wrap .icon-close,.shareproduct_wrap .cancel',function(){
        $('.shareproduct_wrap .cover').addClass('hide')
        $('.shareproduct_wrap .pop_up').addClass('hide')
    });
}
