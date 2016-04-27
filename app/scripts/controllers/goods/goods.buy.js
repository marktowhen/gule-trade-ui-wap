'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('BuyController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,GoodsBuyService) {
    	var gid=$stateParams.gid;
    	GoodsBuyService.condition(gid).success(function(data){
    		$scope.condition = data.body;
    		//console.log($scope.condition);
    	});



    	$scope.conditions = [];

    	$scope.toCondition = function(id){
    		
    		var index =  ex($scope.conditions,id);
    		if(index ==-1){
    			$scope.conditions.push(id)
    		}else{
    			$scope.conditions.splice(index,1);
    		}
    			$scope.conditions.sort();
    		console.log($scope.conditions);


    		// GoodsBuyService.sku(gid,$scope.conditions).success(function(data){
    		// 		console.log(data.body);
    		// });

    		

    	}

    	var ex = function(arr,id){
    		for (var i = 0; i < arr.length; i++) {
    			if(arr[i]==id){
    				return i;
    			}
    		}
    		return -1;

    	}
});

