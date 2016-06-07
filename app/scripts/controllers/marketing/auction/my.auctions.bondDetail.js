'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('MyAuctionBondDetailController', function ($scope,$stateParams,GoodsDetailsService,FlashSaleService, AuctionService,$interval) {
	
	//竞拍商品查询 (时间、状态)
	$scope.ggoods = [];
	AuctionService.detail($stateParams.id)
			.success(function(data){
				if(data.ok){
					
					$scope.auction = data.body;
					//$scope.auction.key = $stateParams.key;
					getGoods($stateParams.gid);
					getGoodSku($scope.auction.skuid)
				}
			}).error(function(data){
				
			});
	
/*	FlashSaleService.getsku(data2.body.skuid).success(function(dataSku){
		if(dataSku.ok){
			$scope.goodSku = dataSku.body;
			 data2.body.propertiesValue=dataSku.body.propertiesValue
		};
	});*/
		
	//定金详情
	  AuctionService.depositStatus($stateParams.id,"").success(function(data){
			if(data.ok){
				$scope.deposit=data.body;
			}
			}).error(function(dataDeposit){
				
			});
	
		var getGoods = function(gid){
			GoodsDetailsService.detail(gid).success(function(data){
				if(data.ok){
					$scope.goods = data.body;
				};
				
			});
				
		};
		var getGoodSku = function(skuid){
			FlashSaleService.getsku(skuid).success(function(data){
				if(data.ok){
					$scope.goodSku = data.body;
				};
			});

		};
	
});