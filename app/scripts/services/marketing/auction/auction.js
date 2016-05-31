'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('AuctionService', ['$http', 'ApiService', function($http, ApiService){
	
	//查询竞拍列表
	this.listWithCondition  = function (from, size){
        return  $http.get(ApiService.api.marketing.auction.listWithCondition,
                    {'params': {'offset':from, 'size':size}});
    };
    //查询竞拍详情
    this.detail  = function (ID){
        return  $http.get(ApiService.api.marketing.auction.detail,
                    {'params': {'ID':ID}});
    };
    
    //查询出价记录
    this.addTimes  = function (auctionGoodsID){
    	return  $http.get(ApiService.api.marketing.auction.count,
    			{'params': {'auctionGoodsID':auctionGoodsID}});
    };
    //查询出价数量
    this.listPriceLog  = function (auctionGoodsID){
    	return  $http.get(ApiService.api.marketing.auction.listPriceLog,
    			{'params': {'auctionGoodsID':auctionGoodsID}});
    };
    //报名
    this.signUp  = function (auctionid,cart){
    	return $http.post(ApiService.api.marketing.auction.signUp.replace(':auctionid',auctionid), cart)
    };

}]);