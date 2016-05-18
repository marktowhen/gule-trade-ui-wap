'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('RankGroupService', ['$http', 'ApiService', function($http, ApiService){
	this.listWithCondition  = function (from, size){
        return  $http.get(ApiService.api.marketing.rankgroup.listWithCondition,
                    {'params': {'offset':from, 'size':size}});
    };
    
    this.detail  = function (ggid){
        return  $http.get(ApiService.api.marketing.rankgroup.detail,
                    {'params': {'ggid':ggid}});
    };

    this.countUser = function(groupID, status){
    	 return  $http.get(ApiService.api.marketing.rankgroup.user.count.replace(':groupID', groupID),
                    {'params': {'status':status}});
    }

    this.start = function( groupgoodsid,cart){
    	return $http.post(ApiService.api.marketing.rankgroup.start.replace(':groupgoodsid',groupgoodsid), cart);
    }

    this.join = function(groupID,cart){
    	return $http.post(ApiService.api.marketing.rankgroup.join.replace(':groupID',groupID), cart);
    }
    this.joinDetail = function(groupID,cart){
    	return $http.get(ApiService.api.marketing.rankgroup.joinDetail.replace(':groupID',groupID));
    }

}]);