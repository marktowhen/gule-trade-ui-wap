'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('CouponCashController',
    function ($scope, $cookies, ConstantService, $state,
        CashCouponService, DiscountCouponService, CouponService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);

    $scope.cashcoupons = [0, 1, 2];

});
