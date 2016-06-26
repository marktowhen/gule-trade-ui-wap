'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('FlashSaleDetailController', function ($scope, $cookies,$state,$stateParams,FlashSaleService,GoodsDetailsService,$interval) {

	var id=$stateParams.id;
	
	FlashSaleService.detail(id).success(function(data){
		if(data.ok){
			$scope.flashsale=data.body;
			runTiming(data.body);
			getGoods($scope.flashsale.gid);
			getGoodSku($scope.flashsale.skuId);
		};
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

	var cart = function(flashsale,goods,goodSku){
		var goodsInCart = [{'gid':flashsale.gid,'skuid':flashsale.skuId,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':flashsale.currentPrice,'pprice':flashsale.currentPrice,'count':1,'imgpath':goodSku.skuPath}];
		var orderInCart = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'FLASHSALE','goods':goodsInCart}];
		return {'orders':orderInCart};
	};
	
	var TimePromise;
	  	var runTiming = function(flashsale){
	  		$scope.endtime=new Date(flashsale.activityTime);
	  		$scope.showtime = new Date(flashsale.showTime);	
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  					if(oft<=0&&flashsale.stock>0){
	  						flashsale.classes = "ad1-right orange fr";
	  					
			  		 		flashsale.BtnValue="立即秒杀";
			  		 		flashsale.dao=('00:00:00:00');
			  		 		flashsale.point="icon-arrow";
			  		 		$scope.statrtFlash = function(){
							FlashSaleService.startFlash($scope.flashsale.id,cart($scope.flashsale,$scope.goods,$scope.goodSku)).success(function(data){
								if(data.ok){		

									FlashSaleService.detail(data.body.flashId).success(function(data){
										if(data.ok){
											data.body.stock=data.body.stock-1;
											FlashSaleService.updateStock(data.body);
										}
									})
									$state.go('orderconfirm.page');
								}else{
									alert(data.message);
								};
							});
						};
			  		 		return TimePromise;
			  		 	}else if(oft<=0&&flashsale.stock==0){
			  		 		flashsale.classes = "ad1-right gray fr";
			  		 		flashsale.BtnValue="已结束";
			  		 		flashsale.dao=('00:00:00:00');
			  		 		flashsale.point="";
			  		 		
			  		 		return TimePromise;
			  		 	}
	  		TimePromise = $interval(function(){
	  					$scope.endtime=new Date(flashsale.activityTime);
	  					$scope.showtime = new Date(flashsale.showTime);	
	  					var oft=Math.round(($scope.endtime-new Date())/1000);
			  		 	if(oft>0&&flashsale.stock>0){
			  		 		flashsale.classes = "ad1-right fr";
			  		 		flashsale.BtnValue="即将开始";
			  		 		flashsale.point="";
			  		 		var ofd=parseInt(oft/3600/24);
							var ofh=parseInt((oft%(3600*24))/3600);
							var ofm=parseInt((oft%3600)/60);
							var ofs=oft%60;
							flashsale.dao=(ofd+':' +ofh+ ':' +ofm+ ':' +ofs);
			  		 	}
	  		 	
			},1000);
		
		return TimePromise;
	};
	$scope.toMerchant = function (mid){
		$state.go('products',{mid:mid});	
	};
})