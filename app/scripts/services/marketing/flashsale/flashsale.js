'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.service('FlashSaleService',function($http, ApiService){
 	this.list = function(from,size){
 		return $http.get(ApiService.api.marketing.flashsale.list,{'params': {'offset':from, 'size':size}});
 	};
 	this.detail = function(id){
 		return $http.get(ApiService.api.marketing.flashsale.detail,{'params':{'id':id}});
 	};
 })