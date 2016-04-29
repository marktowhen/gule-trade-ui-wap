'use strict';
function coupons_onload(){
    //抵用券导航切换
    // $(document).on('click','.coupons_wrap .nav span',function(){
    //     if(!$(this).hasClass('active')){
    //         $('.coupons_wrap .nav span').removeClass('active');
    //         $(this).addClass('active')
    //     }
    // });
    // var voucher_ul='<li class="voucher_li"><div class="coupon_left col-70 fl"><div class="coupon_name">抵用券</div><div class="coupon_usetime fs12">使用时间：<span>2016.02.05-2016.03.04</span></div></div><div class="coupon_right col-30 fl"><div class="sum">50<span class="fs12">&nbsp;元</span></div><div class="limit fs12">满299元可用</div><i></i></div></li>';
    // var p_cash_ul='<li class="p-cash_li"><div class="coupon_left col-70 fl"><div class="coupon_name">购物金</div><div class="coupon_usetime fs12">使用时间：<span>2016.02.05-2016.03.04</span></div></div><div class="coupon_right col-30 fl"><div class="sum">20<span class="fs12">&nbsp;元</span></div><div class="limit fs12">满299元可用</div><i></i></div></li>';
    // $(document).on('click','.coupons_wrap .voucher',function(){
    //    $('.coupons_list ul').html('');
    //    $('.coupons_wrap .addpcash').text('新增抵用券');
    //    $('.coupons_wrap .addpcash').attr("class","addvoucher");
    //    $('.coupons_list ul').html(voucher_ul);
    // });
    // $(document).on('click','.coupons_wrap .p-cash',function(){
    //    $('.coupons_list ul').html('');
    //    $('.coupons_wrap .addvoucher').text('新增购物金');
    //    $('.coupons_wrap .addvoucher').attr("class","addpcash");
    //    $('.coupons_list ul').html(p_cash_ul);
    // });

    //新增抵用券和购物金弹窗
    $(document).on('click','.coupons_wrap .newcoupon',function(){
       $('.curtain').removeClass('hide');
       $('.addvoucher_body').removeClass('hide');
    });
    //弹窗关闭
    $(document).on('click','.coupons_wrap .addvoucher_body .close',function(){
       $('.curtain').addClass('hide');
       $('.addvoucher_body').addClass('hide');
    });
}
