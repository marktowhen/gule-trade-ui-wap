'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('HeaderController', 
    function ($scope, $cookies,$state,ConstantService,$stateParams,MyNewService) {

  	$scope.toSearch =function(){
  		$state.go('products',{goodsname:$scope.goodsname});		
  	}
  	var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);

  	MyNewService.notheadcount("Ma9ogkIXSW-y0uSrvfqVIQ").success(function(data){
  		if(data.ok){
  			$scope.unheadcount = data.body;
  		}
  	})
  	
    	
});