'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionHallController',
    function ($scope,$interval,$state,$route,$window,GoodsDetailsService,$stateParams,$location,AuctionService) {
	
	//竞拍记录
	$scope.priceLog = [];
	$scope.auction;
	$scope.currentPrice=0;
	AuctionService.listPriceLog($stateParams.id)
	.success(function(data){
		if(data.ok){
			if(data.body.length>0){
				for (var i = 0; i < data.body.length; i++) {
					if(i==0){
						$scope.winner=data.body[i];//领先
						$scope.currentPrice=$scope.winner.price;//当前出价
						
					}else{
						$scope.priceLog .push( data.body[i]);
						
					}
				}
				$scope.size=1
			}else{
				/*$scope.currentPrice=0*/
				$scope.currentPrice=0
				$scope.size=0;
			}
		}
		detail($stateParams.id);
	}).error(function(data){
		
	});
	
	//竞拍商品查询 (时间、状态)
	$scope.ggoods = [];
	
	/*AuctionService.detail($stateParams.id)
			.success(function(data){
				
				if(data.ok){
					$scope.auction = data.body;
					if($scope.currentPrice==0){
						alert("0000")
						$scope.auction.myPrice=$scope.auction.startPrice;
						$scope.currentPrice=$scope.auction.startPrice;
					}else{
						
						$scope.auction.myPrice = $scope.currentPrice;
					}
					
					$scope.endtime=$scope.auction.endTime;
			  		$scope.starttime = $scope.auction.startTime;	
			  		$scope.duration = Math.round((($scope.endtime-$scope.starttime)/1000)/3600);
			  		$scope.priceSty = $scope.auction.addPrice;//出价幅度
					runTiming()
				}
			}).error(function(data){
				alert("dd")
			});
	*/
	
	var detail=function(id){
		AuctionService.detail(id)
		.success(function(data){
			
			if(data.ok){
				$scope.auction = data.body;
				if($scope.currentPrice==0){
					$scope.auction.myPrice=$scope.auction.startPrice;
					$scope.currentPrice=$scope.auction.startPrice;
				}else{
					
					$scope.auction.myPrice = $scope.currentPrice;
				}
				
				$scope.endtime=$scope.auction.endTime;
		  		$scope.starttime = $scope.auction.startTime;	
		  		$scope.duration = Math.round((($scope.endtime-$scope.starttime)/1000)/3600);
		  		$scope.priceSty = $scope.auction.addPrice;//出价幅度
				runTiming()
			}
		}).error(function(data){
			alert(data.message)
		});

	}
	
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
	
	var listPriceLog=function(){
		
		
	}
	
	//竞拍时间格式处理
	var TimePromise;
  	var runTiming = function(){
  		/*var EndTime = new Date(auction.startTime)*/
  	/*	$scope.endtime
  		$scope.starttime */	
  		var oft=Math.round(($scope.endtime-new Date())/1000);
  		var zft=Math.round(($scope.starttime-new Date())/1000);
  					if(zft>0){
  						//即将开始
  						var ofd=parseInt(zft/3600/24);
						var ofh=parseInt((zft%(3600*24))/3600);
						var ofm=parseInt((zft%3600)/60);
						var ofs=zft%60;
						$scope.end=('距结束 '+ofh+ '时' +ofm+ '分' +ofs+'秒');
			  		 	return TimePromise;
		  		 	}else if(zft<0&&oft<0){
		  		 		//已结束
		  		 		$scope.end=("距结束 00时00分00秒");
		  		 		/*auction.ofd="00";  //时
		  		 		auction.ofh="00";  //时
						auction.ofm="00";  //分
						auction.ofs="00";  //秒
*/		  		 		return TimePromise;
		  		 	}
  		TimePromise = $interval(function(){
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  		var zft=Math.round(($scope.starttime-new Date())/1000);
		  		 	if(zft<=0&&oft>0){
		  		 		//正在竞拍
		  		 		var ofd=parseInt(oft/3600/24);
						var ofh=parseInt((oft%(3600*24))/3600);
						var ofm=parseInt((oft%3600)/60);
						var ofs=oft%60;
						$scope.end=('距结束 '+ofh+ '时' +ofm+ '分' +ofs+'秒');
						$scope.ofd=ofd;  //日
						$scope.ofh=ofh;  //时
						$scope.ofm=ofm;  //分
						$scope.ofs=ofs;  //秒
		  		 	}
  			
  		 	
		},1000);
	
	return TimePromise;
	
  	}
  	
  	$scope.myPrice=$scope.currentPrice; //我的出价
  	//$scope.currentPrice=$scope.winner.price; //当前价格
  	$scope.addTimes=0; //加价次数
  	$scope.reduceTimes=0; //减价次数
  	//$scope.priceSty=$scope.auction.addPrice; //加价幅度
  	//加价
  	$scope.add = function(){
  		$scope.addTimes=$scope.addTimes+1;
  		$scope.auction.myPrice=$scope.auction.myPrice+$scope.priceSty;
	}
  	//减价
  	$scope.reduce = function(){
  		$scope.reduceTimes=$scope.reduceTimes+1;
  		$scope.auction.myPrice=$scope.auction.myPrice-$scope.priceSty;
  	}
  	
  	//重加载
  	$scope.reloadRoute = function() {
  	   $window.location.reload();
  	}
  	
  	
  	//出价
  	$scope.bidding = function(){
  	/*	alert("立即出价")
  		alert($scope.auction.myPrice+"我的出价");
  		alert($stateParams.id+"竞拍商品");*/
  		
  		
  		AuctionService.bidding($stateParams.id,$scope.auction.myPrice)
  		.success(function(data){
  			if(data.ok){
  				$scope.reloadRoute();
  				//$state.go("auction-hall");
  			}
  		}).error(function(data){
  			
  		});
  		
  	}
  	
    
});
