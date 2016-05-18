'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('CouponDiscountController',
    function ($scope, $cookies, ConstantService, $state,
        CashCouponService, DiscountCouponService, CouponService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);

    DiscountCouponService.getUnusedCoupon("2").success(function(data){
    	if(data.ok){
    		$scope.discountcoupons = data.body;
    	}
		
	});
	$scope.$on("activeDiscountCoupon",function (event, msg){
        	DiscountCouponService.getUnusedCoupon(uid).success(function(data){
				$scope.discountcoupons = data.body;
			});
        
    });


});
