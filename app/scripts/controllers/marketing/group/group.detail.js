'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GroupDetailController', 
	['$scope', 'GroupBuyService', '$stateParams',
		 function ($scope, GroupBuyService, $stateParams) {
	

		GroupBuyService.detail($stateParams.ggid)
			.success(function(data){
				if(data.ok){
					$scope.goodsdetail = data.body;
				}
			}).error(function(data){

			});
	
}]);