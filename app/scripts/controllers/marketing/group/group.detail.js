'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GroupDetailController', 
		 function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService,MerchantService,FlashSaleService) {
	
		//团购商品
		GroupBuyService.detail($stateParams.ggid)
			.success(function(data){
				if(data.ok){
					$scope.groupGoods = data.body;
					goodsSku($scope.groupGoods.skuid);
				}
			}).error(function(data){

			});
		//商品本身
		GoodsDetailsService.detail($stateParams.gid)
		.success(function(data2){
				$scope.goods = data2.body;
setTimeout(function(){var swiper = new Swiper('#product_swiper_container', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        autoplay:5000,
        loop:true,
        pagination: '.swiper-pagination',
		paginationClickable :true,
    });},200)
	


						
		});

		var goodsSku = function(skuid){
			FlashSaleService.getsku(skuid).success(function(data){
				if(data.ok){
					$scope.goodSku = data.body;
				};
			});
		}
		//店铺


		$scope.groupID = $stateParams.group_id ;
		var isEmpty = function(str){
			if(str==null || str==undefined || str==''){
				return true;
			}
			return false;
		}
		if(!isEmpty($scope.groupID)){

			//查询参团数量
			GroupBuyService.countUser($scope.groupID, 'PAID').success(function(data){
				$scope.showGroup = true;
				$scope.count = data.body;
			})
		}

		$scope.join = function(){
			if ($scope.groupID) {
				var car  = creatCar($scope.groupGoods, $scope.goods,$scope.groupGoods.currentPrice.price);
				GroupBuyService.join($scope.groupID,car)
				.success(function(data){
					if(data.ok){
						$state.go('orderconfirm.page');
					}else{
						alert(data.message);
					}
				})
			}
			
		}

		$scope.start = function(){
			GroupBuyService.start($scope.groupGoods.id,creatCar($scope.groupGoods, $scope.goods,$scope.groupGoods.currentPrice.price))
				.success(function(data){
					if(data.ok){
						$state.go('orderconfirm.page');
					}else{
						alert(data.message);
					}
				});
		}

		$scope.buyit = function(){
			
		}

		var creatCar = function(groupGoods, goods, price){
	    	var goodsInCar = [{'gid':goods.gid,'skuid':groupGoods.skuid,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':price,'count':1}];
	    	
	    	var orderInCar = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'GROUP','goods':goodsInCar}];
	    	return {'orders':orderInCar};
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