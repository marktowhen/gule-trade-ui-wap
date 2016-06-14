'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 */
wapApp.service('CollectionService', function ($http, $location , ApiService) {
   
    	 this.list = function(){
    		  return $http.get(ApiService.api.wapGoods.getFavorites,
    		   {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    		};
    
});
