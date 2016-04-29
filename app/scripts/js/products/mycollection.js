function mycollection_onload(){
    $(document).on('click','.mycollection_wrap .deselect',function(){
        $(this).parents('li').addClass('hide')
    });
    $(document).on('click','.mycollection_wrap .movetocart',function(){
        $(this).parents('li').addClass('hide')
    })
}
