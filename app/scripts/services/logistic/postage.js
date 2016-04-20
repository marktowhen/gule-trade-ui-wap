'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('PostageService', function ($http, $location, ApiService, $state) {
    
    this.calculate = function(postage){
        return $http.put(ApiService.api.logistic.postage, postage, {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };
});
