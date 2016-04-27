'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GroupDetailController', 
	
		 function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService) {
	

		GroupBuyService.detail($stateParams.ggid)
			.success(function(data){
				if(data.ok){
					$scope.groupGoods = data.body;
				}
			}).error(function(data){

			});
		
		GoodsDetailsService.detail($stateParams.gid).success(function(data2){
						$scope.goods = data2.body;
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
			$state.go('product-details',{cart:1});
		}
});