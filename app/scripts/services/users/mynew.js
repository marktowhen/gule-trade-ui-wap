'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 */
wapApp.service('MyNewService', function ($http, $location , ApiService) {
	//消息列表updateStatus
	this.list = function(uid,from,size){
		return $http.get(ApiService.api.message.list.replace(':uid',uid).replace(':from',from).replace(':size',size));
	};
	this.updatestatus = function(id){
		return $http.get(ApiService.api.message.updateStatus.replace(':id',id));
	};
})