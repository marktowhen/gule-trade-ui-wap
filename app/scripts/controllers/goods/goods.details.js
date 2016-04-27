'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GoodsDetailsController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,GoodsDetailsService) {
    	var gid=$stateParams.gid;

    	$scope.isCart= false;

		GoodsDetailsService.detail(gid).success(function(data){
			$scope.goods = data.body;
			//console.log($scope.goods);
		});

		$scope.getInfo = function(id){
			GoodsDetailsService.info(gid).success(function(data){
			$scope.infos = data.body;
			//console.log($scope.infos);
		});
		};
		/////进入店铺
		$scope.toMerchant = function (mid){
			$state.go('products',{mid:mid});	
		};
		/////收藏
		$scope.fav = function (gid){
			GoodsDetailsService.fav(gid);
		}

		///购物车
		$scope.toCart  = function(gid){
			$scope.isCart= true;
		}
});
