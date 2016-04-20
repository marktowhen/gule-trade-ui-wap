'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GroupListController', 
	['$scope', 'GroupBuyService', function ($scope, GroupBuyService) {
	
		GroupBuyService.listWithCondition(0, 20)
			.success(function(data){
				if(data.ok){
					$scope.ggoods = data.body;
				}
			}).error(function(data){

			});
	
}]);