function mycollection_onload(){
    //取消收藏
    $(document).on('click','.mycollection_wrap .deselect',function(){
        $(this).parents('li').remove()
    });
    //移至购物车
    $(document).on('click','.mycollection_wrap .movetocart',function(){
        $(this).parents('li').remove()
    })
}
