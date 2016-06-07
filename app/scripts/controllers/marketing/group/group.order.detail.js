'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GroupOrderDetailController', function ($scope,$state,GroupBuyService, $stateParams,MyReceiveAddressService) {
	var id=$stateParams.id;
	
	/*登录用户的uid*/
	MyReceiveAddressService.userAddress().success(function(data){
		if(data.ok){
			$scope.address  = data.body;
		}
	})
	GroupBuyService.getgroupgoods(id).success(function(data){
		if(data.ok){
			$scope.group = data.body;
		}
	})
	

})