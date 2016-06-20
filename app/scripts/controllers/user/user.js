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
		/*var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
		alert(uid+"lll");*/
		UserService.getuser().success(function(data){
			if(data.ok){
				$scope.user=data.body;
			}
		})

	})