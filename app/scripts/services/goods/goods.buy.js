'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('GoodsBuyService', function ($http, $location, ApiService, $state) {
			

	  this.condition = function(gid){
    		  return $http.get(ApiService.api.wapGoods.condition.replace(":gid",gid),
    		   {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };

      this.sku = function(gid,condition){
    		  return $http.get(ApiService.api.wapGoods.sku.replace(":gid",gid),
    		  	 	{params: {'conditions':condition}},
    		   {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };
});
