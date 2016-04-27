'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('HeaderController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams) {

  	$scope.toSearch =function(){
  		$state.go('products',{goodsname:$scope.goodsname});		
  	}
  	
    	
});