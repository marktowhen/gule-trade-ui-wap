'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionDetailController', 
		 function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService,MerchantService,AuctionService,$interval) {
	
	//竞拍商品查询 (时间、状态)
	$scope.ggoods = [];
	AuctionService.detail($stateParams.id)
			.success(function(data){
				if(data.ok){
					$scope.auction = data.body;
					$scope.auction.key = $stateParams.key;
					
					$scope.endtime=$scope.auction.endTime;
			  		$scope.starttime = $scope.auction.startTime;	
					runTiming()
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
				
			});
	
	
	//查询竞拍次数
    AuctionService.addTimes($stateParams.id).success(function(data){
	    	if(data.ok){
	    		$scope.addTimes=data.body;
			}
		}).error(function(data){
	
		});	
    
  //竞拍时间格式处理
	var TimePromise;
  	var runTiming = function(){
  		/*var EndTime = new Date(auction.startTime)*/
  	/*	$scope.endtime
  		$scope.starttime */	
  		var oft=Math.round(($scope.endtime-new Date())/1000);
  		var zft=Math.round(($scope.starttime-new Date())/1000);
  					
  		TimePromise = $interval(function(){
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
		  		return TimePromise;
  		 	}else if(zft<0&&oft>0){
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
		  	}else if(zft==0){
		  	  updateStatus($stateParams.id,"AUCTIONING");
		  	}else if(oft==0){
		  	  updateStatus($stateParams.id,"OVER");
		  	}
  			
  		 	
		},1000);
	
	return TimePromise;
	
  	}
  	
  	$scope.auctionid=$stateParams.id;
  	$scope.signUp = function(){
  		AuctionService.signUp($scope.auctionid,creatCar($scope.auction, $scope.goods,$scope.auction.deposit))
			.success(function(data){
				if(data.ok){
					$state.go('auction-signup');
				}else{
					alert(data.message);
				}
			});
	}
  	
  	var creatCar = function(groupGoods, goods, price){
    	var goodsInCar = [{'gid':goods.gid,'skuid':groupGoods.skuid,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':price,'count':1}];
    	
    	var orderInCar = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'GROUP','goods':goodsInCar}];
    	return {'orders':orderInCar};
	}
	
  	//更新竞拍状态
    var updateStatus=function(id,status){
        AuctionService.update(id,status)
      .success(function(data){
          if(data.ok){
              $scope.auction=status
          }else{
              alert(data.message);
          }
      });
    }
});