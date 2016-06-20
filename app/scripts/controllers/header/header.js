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
  		$state.go('search',{goodsname:$scope.goodsname});		
  	}

  	MyNewService.notheadcount().success(function(data){
  		if(data.ok){
  			$scope.unheadcount = data.body;
  		}
  	})
  	
    	
});