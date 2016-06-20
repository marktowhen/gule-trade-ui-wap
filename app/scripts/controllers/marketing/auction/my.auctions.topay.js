'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('MyAuctionToPayController', function ($scope, $state,AuctionService,$interval,GoodsDetailsService,FlashSaleService) {
		
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
						GoodsDetailsService.detail(data2.body.gid)
						.success(function(data3){
						        data2.body.gname=data3.body.name;
						        data2.body.goods=data3.body;

						})
						
							FlashSaleService.getsku(data2.body.skuid).success(function(dataSku){
								if(dataSku.ok){
									$scope.goodSku = dataSku.body;
									 data2.body.propertiesValue=dataSku.body.propertiesValue
								};
							});

						
						
						$scope.auctionList.push(data2.body)
					}
				}).error(function(data){
					
				});
				
				
				
			}
			
		}
		
	}).error(function(data){
		
	});
	
	var creatCar = function(groupGoods, goods, price){
    	var goodsInCar = [{'gid':goods.gid,'skuid':groupGoods.skuid,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':price,'count':1}];
    	
    	var orderInCar = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'AUCTIONFINAL','goods':goodsInCar}];
    	return {'orders':orderInCar};
	}
	
	$scope.getGoods = function(gid){
		
		GoodsDetailsService.detail(gid).success(function(data){
			if(data.ok){
				$scope.goods = data.body;
				/*console.log($scope.goods);*/
			};
			
		});
			
	};
	
	$scope.getAuction=function(auctionid){
		
		AuctionService.detail(auctionid)
		.success(function(data){
			if(data.ok){
			$scope.auction=data.body;
			$scope.auctionGoodID=$scope.auction.gid;
			}
		}).error(function(data){
			
		});
	}
	
	$scope.topay = function(auctionid,gid,deposit,au,goods){
  		AuctionService.payFinal(auctionid,creatCar(au,goods,deposit))
			.success(function(data){
				if(data.ok){
					$state.go('orderconfirm.page');
				}else{
					alert(data.message);
				}
			});
	}
	
});