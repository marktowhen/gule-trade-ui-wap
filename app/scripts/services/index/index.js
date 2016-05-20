'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('IndexService', function ($http, $location, ApiService, $state) {
  	this.banner=function(type,from,size){
  		return $http.get(ApiService.api.indexBanner.imgList.replace(':from',from).replace(':size',size),{'params':{'type':type}});
  	};
});
