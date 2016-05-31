'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('OrderParentController', function ($scope,$state) {
	$(".order_nav a.all").addClass('on');
	$(".order_nav a i.all").addClass('on');
	$scope.goall = function(){
		$state.go('orderhistory.all');
		$(".order_nav a.all").addClass('on');
		$(".order_nav a i.all").addClass('on');
		$(".order_nav a.payment").removeClass('on');
		$(".order_nav a i.payment").removeClass('on');
		$(".order_nav a.paid").removeClass('on');
		$(".order_nav a i.paid").removeClass('on');
		$(".order_nav a.delivered").removeClass('on');
		$(".order_nav a i.delivered").removeClass('on');

	}
	$scope.gopayment = function(){
		$state.go('orderhistory.topay');
		$(".order_nav a.all").removeClass('on');
		$(".order_nav a i.all").removeClass('on');
		$(".order_nav a.paid").removeClass('on');
		$(".order_nav a i.paid").removeClass('on');
		$(".order_nav a.delivered").removeClass('on');
		$(".order_nav a i.delivered").removeClass('on');
		$(".order_nav a.payment").addClass('on');
		$(".order_nav a i.payment").addClass('on');

	}
	$scope.gounfilled = function(){
		$state.go('orderhistory.paid');
		$(".order_nav a.all").removeClass('on');
		$(".order_nav a i.all").removeClass('on');
		$(".order_nav a.payment").removeClass('on');
		$(".order_nav a i.payment").removeClass('on');
		$(".order_nav a.delivered").removeClass('on');
		$(".order_nav a i.delivered").removeClass('on');
		$(".order_nav a.paid").addClass('on');
		$(".order_nav a i.paid").addClass('on');
		
	}
	$scope.godelivered = function(){
		$state.go('orderhistory.delivered');
		$(".order_nav a.delivered").addClass('on');
		$(".order_nav a i.delivered").addClass('on');
		$(".order_nav a.all").removeClass('on');
		$(".order_nav a i.all").removeClass('on');
		$(".order_nav a.payment").removeClass('on');
		$(".order_nav a i.payment").removeClass('on');
		$(".order_nav a.paid").removeClass('on');
		$(".order_nav a i.paid").removeClass('on');
		
	}
})