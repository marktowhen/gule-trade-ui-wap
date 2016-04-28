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

}]);