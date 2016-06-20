'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 */
wapApp.service('UserService', function ($http, $location , ApiService) {
	this.getuser = function(){
		return  $http.get(ApiService.api.user.getSingleUser);
	}
})