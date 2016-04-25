'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('GoodsDetailsService', function ($http, $location, ApiService, $state) {
    
    this.detail = function(gid){
    		  return $http.get(ApiService.api.wapGoods.detail.replace(":gid",gid),
    		   {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };




});
