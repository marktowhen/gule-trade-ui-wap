'use strict';
function gotop(){
    $(document).on('click','.gotop',function(){
        $("html,body").animate({scrollTop: 0},200);
    });
    $(window).scroll(
        function(){
            if($(window).scrollTop()>=$(document).height()-$(window).height()-70){
                $(".gotop").show();
            }else{
                $(".gotop").hide();
            }
        }
    );
}