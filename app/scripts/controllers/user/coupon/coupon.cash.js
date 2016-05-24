'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('CouponCashController',function ($scope, $cookies, ConstantService,$stateParams, $state,CashCouponService, DiscountCouponService, CouponService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
    CashCouponService.getUnusedCoupon("2").success(function(data){
    	if(data.ok){
    		$scope.cashcoupons=data.body;
    	}
    })

    $scope.$on("activeCashCoupon",function (event, msg) {
	        CashCouponService.getUnusedCoupon(uid).success(function(data){
				$scope.cashcoupons = data.body;
			});
        
    });


});
