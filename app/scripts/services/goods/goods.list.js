'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('GoodsListService', function ($http, $location, ApiService, $state) {
    
	   this.allGoodsList = function(mid,tid,order,name,pagefrom,pagesize){
       return  $http.get(ApiService.api.wapGoods.list,
        		   	{params: {'mid':mid,'tid':tid,'order':order,'name':name,'from':pagefrom,'size':pagesize}}
        		  );
    };
});
