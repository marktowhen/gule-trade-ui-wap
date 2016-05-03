'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 */
wapApp.service('MerchantService', function ($http, $location , ApiService) {
   
    //查询
    this.single = function(mid){
        return $http.get(ApiService.api.merchant.getMerchantInfo.replace(':mid',mid));
    };

    
    
});
