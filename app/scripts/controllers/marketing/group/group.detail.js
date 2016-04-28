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
					$scope.groupGoods.currentPrice = data.body.priceSettings[0];
				}
			}).error(function(data){

			});
		
		GoodsDetailsService.detail($stateParams.gid).success(function(data2){
				$scope.goods = data2.body;
				
						
		});

		var groupID = $stateParams.group_id ;
		var isEmpty = function(str){
			if(str==null || str==undefined || str==''){
				return true;
			}
			return false;
		}
		if(!isEmpty(groupID)){

			//查询参团数量
			GroupBuyService.countUser(groupID, 'PAID').success(function(data){
				$scope.showGroup = true;
				$scope.count = data.body;
			})
		}

		// $scope.getInfo = function(id){
		// 	GoodsDetailsService.info(gid).success(function(data){
		// 		$scope.infos = data.body;
		// 		//console.log($scope.infos);
		// 	});
		// };
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