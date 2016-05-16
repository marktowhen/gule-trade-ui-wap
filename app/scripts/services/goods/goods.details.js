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

    this.info = function(gid){
    		  return $http.get(ApiService.api.wapGoods.info.replace(":gid",gid),
    		   {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };


    this.fav = function (gid){
    	  return $http.post(ApiService.api.wapGoods.favorite.replace(":gid",gid), 
    	  	{'gid':gid}, 
    	  	{headers:{'Content-Type':'application/json;charset=UTF-8'}}
    	  	);  
    };

    this.isfav = function (gid){
          return $http.get(ApiService.api.indexs.isfav.replace(":gid",gid), 
            {'gid':gid}, 
            {headers:{'Content-Type':'application/json;charset=UTF-8'}}
            );  
    };


       this.delfav = function (favId){
          return $http.post(ApiService.api.indexs.delfav.replace(":favId",favId), 
            {headers:{'Content-Type':'application/json;charset=UTF-8'}}
            );  
    };


});
