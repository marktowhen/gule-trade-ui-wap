'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('GroupBuyService', ['$http', 'ApiService', function($http, ApiService){
	
	this.listWithCondition  = function (from, size){
        return  $http.get(ApiService.api.marketing.group.listWithCondition,
                    {'params': {'offset':from, 'size':size}});
    };

    this.detail  = function (ggid){
        return  $http.get(ApiService.api.marketing.group.detail,
                    {'params': {'ggid':ggid}});
    };

    this.countUser = function(groupID, status){
    	 return  $http.get(ApiService.api.marketing.group.user.count.replace(':groupID', groupID),
                    {'params': {'status':status}});
    }

    this.start = function( groupgoodsid,cart){
    	return $http.post(ApiService.api.marketing.group.start.replace(':groupgoodsid',groupgoodsid), cart);
    }

    this.join = function(groupid,cart){
    	return $http.post(ApiService.api.marketing.group.join.replace(':groupid',groupid), cart);
    }
    this.singlegroup = function(groupid){
        return $http.get(ApiService.api.marketing.group.singlegroup.replace(':groupid',groupid));
    }
    this.singleUser = function(groupid,uid){
        return $http.get(ApiService.api.marketing.group.user.single.replace(':groupid',groupid).replace(':uid',uid));
    };
    /*通过uid查询出对应团的信息*/
    this.getgroup = function(uid){
        return $http.get(ApiService.api.marketing.group.user.getgroup.replace(':uid',uid));
    };
    /*通过id查出对应的团的详细信息*/
    this.getgroupgoods = function(id){
        return $http.get(ApiService.api.marketing.group.user.getgroupgoods.replace(':id',id));
    };

}]);