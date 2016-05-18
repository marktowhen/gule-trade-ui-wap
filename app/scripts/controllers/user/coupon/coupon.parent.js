'use strict';

/**
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('CouponParentController',
    function ($scope, $cookies, ConstantService, $state,$location,
        CashCouponService, DiscountCouponService, CouponService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
    $("#cash").hide();
    $scope.discount = function(){
    	$("#discount").show();
    	$("#cash").hide();
    	$state.go("coupon.discount");
    }
    $scope.cash = function(){
    	$("#discount").hide();
    	$("#cash").show();
    	$state.go("coupon.cash");
    }
    $(".curtain").hide();
    $(".addvoucher_body").hide();
    $scope.addDiscount = function(){
    	$(".curtain").show();
    	$(".addvoucher_body").show();
    }
    $(".curtain1").hide();
    $(".addvoucher_body1").hide();
    $scope.addCash = function(){
    	$(".curtain1").show();
    	$(".addvoucher_body1").show();
    }
    $scope.discountConfirm = function(code){
    	if(code!=null && code!=undefined && code!=''){
			DiscountCouponService.activeDiscountCoupon(code).success(function(data){
					if(data.code==200){
						//alert('充值成功');
						//将更改传给父级controller
	                    $scope.$emit("activeDiscountCoupon", '抵用券激活');
	                    $scope.code = '';
					}else{
						alert(data.message);
					}
			});
		}else{
            alert("请输入卡号");
		}
    }
    $scope.cashConfirm = function(code){
    	if(code!=null && code!=undefined && code!=''){
			CashCouponService.activeCashCoupon(code).success(function(data){
					if(data.code==200){
						//alert('充值成功');
						//将更改传给父级controller
                        $scope.$emit("activeCashCoupon", '购物金激活');
                        $scope.code = '';

					}else{
						alert(data.message);
					}
			});
		}else{

            alert("请输入卡号");
		}
    }
   
});
