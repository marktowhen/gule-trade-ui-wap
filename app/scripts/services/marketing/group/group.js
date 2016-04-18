'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
etradewapApp.service('GroupBuyService', ['$scope', '$http', function($scope, $http){
	
	this.listWithCondition  = function (from, size){
        return  $http.get(ApiService.api.marketing.group.listWithCondition,
                    {'params': {'offset':from, 'size':size}});
    };

    this.detail  = function (ggid){
        return  $http.get(ApiService.api.marketing.group.detail,
                    {'params': {'ggid':ggid}});
    };

}]);