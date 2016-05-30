'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
  wapApp.controller('UserController', 
	function ($scope,UserService, $stateParams) {
		UserService.getuser("Ma9ogkIXSW-y0uSrvfqVIQ").success(function(data){
			if(data.ok){
				$scope.user=data.body;
			}
		})

	})