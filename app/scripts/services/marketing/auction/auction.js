'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('AuctionService', ['$http', 'ApiService', function($http, ApiService){
	
	this.listWithCondition  = function (from, size){
        return  $http.get(ApiService.api.marketing.auction.listWithCondition,
                    {'params': {'offset':from, 'size':size}});
    };

    this.detail  = function (ggid){
        return  $http.get(ApiService.api.marketing.auction.detail,
                    {'params': {'ggid':ggid}});
    };

}]);