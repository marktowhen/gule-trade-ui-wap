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
			//console.log($scope.goods);
		
		};
	});
	var getGoods = function(gid){
		GoodsDetailsService.detail(gid).success(function(data){
			if(data.ok){
				$scope.goods = data.body;
				/*console.log($scope.goods);*/
			};
			
		});
			
	};

	var cart = function(flashsale,goods){
		var goodsInCart = [{'gid':flashsale.gid,'skuid':flashsale.skuId,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':flashsale.currentPrice,'count':1}];

		var orderInCart = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'FLASHSALE','goods':goodsInCart}];

		return {'orders':orderInCart};
	};
	
	var TimePromise;
	  	var runTiming = function(flashsale){
	  		$scope.endtime=new Date(flashsale.activityTime);
	  		$scope.showtime = new Date(flashsale.showTime);	
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  					if(oft<=0&&flashsale.stock>0){
	  						flashsale.classes = "ad1-bottom org";
	  					$scope.statrtFlash = function(){
							FlashSaleService.startFlash($scope.flashsale.id,cart($scope.flashsale,$scope.goods)).success(function(data){
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
			  		 		flashsale.BtnValue="立即秒杀";
			  		 		flashsale.dao=('00:00:00:00');
			  		 		flashsale.point="icon-arrow";
			  		 		return TimePromise;
			  		 	}else if(oft<=0&&flashsale.stock==0){
			  		 		flashsale.classes = "ad1-bottom gra";
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
			  		 		flashsale.classes = "ad1-bottom";
			  		 		flashsale.BtnValue="即将开始";
			  		 		flashsale.point="";
			  		 		var ofd=parseInt(oft/3600/24);
							var ofh=parseInt((oft%(3600*24))/3600);
							var ofm=parseInt((oft%3600)/60);
							var ofs=oft%60;
							flashsale.dao=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
			  		 	}
						
	  			
	  		 	
			},1000);
		
		return TimePromise;
	};

	$scope.toMerchant = function (mid){
		$state.go('products',{mid:mid});	
	};



})