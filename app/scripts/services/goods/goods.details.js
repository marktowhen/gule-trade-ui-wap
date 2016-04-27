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
    	  	) .success(function(response){
	         				if(response.code==200){
	         					alert("收藏成功!");
	         				}else{
	         					alert("你已收藏过该商品!");
	         				}
	         			}).error(function(response){
							alert("收藏成功:"+response);
						});      
    };


});
