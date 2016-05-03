function shareproduct_onload(){
    //分享到第三方的选择弹窗
    $(document).on('click','.shareproduct_wrap .share',function(){
        $('.shareproduct_wrap .cover').removeClass('hide')
        $('.shareproduct_wrap .pop_up').removeClass('hide')
    });
    //关闭分享弹窗
    $(document).on('click','.shareproduct_wrap .icon-close,.shareproduct_wrap .cancel',function(){
        $('.shareproduct_wrap .cover').addClass('hide')
        $('.shareproduct_wrap .pop_up').addClass('hide')
    });
    //取消收藏
    $(document).on('click','.shareproduct_wrap .deselect',function(){
        $(this).parents
    });
}
