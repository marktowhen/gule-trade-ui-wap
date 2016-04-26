function partner_help_onload(){
    $(document).on('click','.partner-help_wrap i.icon-arrow,.help_title',function(){
        if($(this).siblings('.help_content').hasClass('hide')){
            $(this).siblings('.help_content').removeClass('hide');
            $(this).parent('.help_list_body').addClass('active');
            $(this).parent().find('.icon-arrow').velocity({ rotateZ: "90"},200);
        }else{
            $(this).siblings('.help_content').addClass('hide');
            $(this).parent('.help_list_body').removeClass('active');
            $(this).parent().find('.icon-arrow').velocity({ rotateZ: "0"},200);
        }
    });
}
