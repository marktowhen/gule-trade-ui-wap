'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('ConfrimDelivered', function ($scope,$state,$stateParams,OrderService) {
	var oid=$stateParams.id;
	OrderService.singleorder(oid).success(function(data){
		if(data.ok){
			$scope.order = data.body;
		}
	});
	$scope.confirmDelivered = function(oid){
		OrderService.confirmDelivered(oid).success(function(data){
			if(data.ok){
				$state.go('orderhistory.all');
			}
		})
	}

})
