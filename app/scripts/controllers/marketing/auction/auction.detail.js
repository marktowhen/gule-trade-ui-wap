'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionDetailController', 
		 function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService,MerchantService,AuctionService) {
	
	//竞拍商品查询 (时间、状态)
	$scope.ggoods = [];
	AuctionService.detail($stateParams.id)
			.success(function(data){
				if(data.ok){
					$scope.auction = data.body;
				}
			}).error(function(data){
				
			});
	
	
	
	//商品本身
	GoodsDetailsService.detail($stateParams.gid)
	.success(function(data2){
			$scope.goods = data2.body;
			$scope.goodId = $stateParams.gid;
	setTimeout(function(){var swiper = new Swiper('#product_swiper_container', {
	        slidesPerView: 1,
	        slidesPerColumn: 1,
	        autoplay:5000,
	        loop:true,
	        pagination: '.swiper-pagination',
			paginationClickable :true,
	    });},200)

	})
	
	//竞拍记录
	$scope.priceLog = [];
	AuctionService.listPriceLog($stateParams.id)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						if(i==0){
							data.body[i].status="first"; //领先
						}else{
							
							data.body[i].status="out"  //出局
						}
						$scope.priceLog .push( data.body[i]);
					}
				}
			}).error(function(data){
				alert("error")
			});
	
	
	//查询竞拍次数
    AuctionService.addTimes($stateParams.id).success(function(data){
	    	if(data.ok){
	    		$scope.addTimes=data.body;
			}
		}).error(function(data){
	
		});			    	
	
});