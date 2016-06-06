'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('OrderDetailController', function ($scope,$state,OrderService,GoodsDetailsService,$stateParams,MyReceiveAddressService) {
 	var id=$stateParams.id;
 	var gid=$stateParams.gid;
 	MyReceiveAddressService.userAddress().success(function(data){
		if(data.ok){
			$scope.address  = data.body;
		}
	})
	OrderService.singleorder(id).success(function(data){
		if(data.ok){
			$scope.orders = data.body;
		}
	})
	GoodsDetailsService.detail(gid).success(function(data){
			$scope.goods = data.body;
		});
 })