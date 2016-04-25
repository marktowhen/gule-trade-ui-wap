'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GoodsDetailsController', 
    function ($scope, $cookies, ConstantService,$stateParams,GoodsDetailsService) {
    	var gid=$stateParams.gid;
		GoodsDetailsService.detail(gid).success(function(data){
			$scope.goods = data.body;
			console.log($scope.goods);
		});
});
