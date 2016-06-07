'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('MyAuctionBondController', function ($scope, AuctionService,$interval,FlashSaleService,GoodsDetailsService) {
		
	//我的竞拍	
	$scope.status="NEW";
	$scope.auctionList = [];
	AuctionService.listMy($scope.status)
	.success(function(data){
		if(data.ok){
			for (var i = 0; i < data.body.length; i++) {
				$scope.status=data.body[i].status
				AuctionService.detail(data.body[i].auctionGoodsID)
				.success(function(data2){
					if(data2.ok){
						data2.body.myStatus=$scope.status
						//商品详情
						GoodsDetailsService.detail(data2.body.gid)
						.success(function(data3){
						        data2.body.gname=data3.body.name;

						})
						   //商品型号
						 FlashSaleService.getsku(data2.body.skuid).success(function(dataSku){
								if(dataSku.ok){
									$scope.goodSku = dataSku.body;
									 data2.body.propertiesValue=dataSku.body.propertiesValue
								};
							});
						   //定金状态
						  AuctionService.depositStatus(data2.body.id,"").success(function(dataDeposit){
							if(dataDeposit.ok){
								data2.body.depositStatus=dataDeposit.body.depositStatus;
								data2.body.lockTime=dataDeposit.body.lockTime;
								data2.body.releaseTime=dataDeposit.body.releaseTime;
								
							}
							}).error(function(dataDeposit){
								
							});
						

						
						
						$scope.auctionList.push(data2.body)
					}
				}).error(function(data){
					
				});
				
				
				
			}
			
		}
		
	}).error(function(data){
		
	});
	
	
});