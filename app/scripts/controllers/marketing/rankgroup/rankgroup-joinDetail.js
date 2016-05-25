'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('RankGroupJoinController', 
		 function ($scope, $state,RankGroupService, $stateParams,GoodsDetailsService,MerchantService,$interval) {
	
   
	
	//团购商品
	$stateParams.ggid='GsIpvjmXRM26K3qp5M9RCw';
	RankGroupService.detail($stateParams.ggid)
			.success(function(data){
				if(data.ok){
					$scope.groupGoods = data.body;
					$scope.duration = $scope.groupGoods.duration;//团时长
					$scope.end = $scope.groupGoods.deadline;//商品截止日期
					$scope.groupGoods.groupID= data.body.groupID;
					$scope.groupID=$scope.groupGoods.groupID;
					$scope.groupGoods.currentPrice = data.body.priceSettings[0];
				}
			}).error(function(data){

			});
	
	///商品本身
	$stateParams.gid='cc7LEWe8Sa-YrwkdrmbtiA';
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
	
	
	
	 //团购详情
	$stateParams.ggid='uxetSgu7SBqLCoZJF-9RtA';
	RankGroupService.joinDetail($stateParams.ggid)
	.success(function(data){
		if(data.ok){
			$scope.group = data.body;
			$scope.start=$scope.group.start; // 团开始时间
			$scope.count=$scope.group.buyers.length; // 参团人数
			$scope.leader=$scope.group.leader; // 团长
			runTiming();
		}
	}).error(function(data){

	});
	
	
	/********************************************************************************/
	
	$scope.groupID='uxetSgu7SBqLCoZJF-9RtA';
	$scope.join = function(){
		//参团
		if ($scope.groupID) {
			var car  = creatCar($scope.groupGoods, $scope.goods,10);
			RankGroupService.join($scope.groupID,car)
			.success(function(data){
				if(data.ok){
					$state.go('orderconfirm.page');
				}else{
					alert(data.message);
				}
			})
		}
		
	}
	
	
	var creatCar = function(groupGoods, goods, price){
    	var goodsInCar = [{'gid':goods.gid,'skuid':groupGoods.skuid,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':price,'count':1}];
    	
    	var orderInCar = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'GROUP','goods':goodsInCar}];
    	return {'orders':orderInCar};
	}
		
	
	var TimePromise;
  	var runTiming = function(){
  		var oft=Math.round(($scope.start+$scope.duration-new Date())/1000);
  					if(oft<=0){
  						$scope.dao=("已结束：00:00:00:00");
  					/*	rankGroup.classes="joined-group-box3 gray";*/
		  		 		return TimePromise;
		  		 	}else if(oft>0){
		  		 		return TimePromise;
		  		 	}
  		TimePromise = $interval(function(){
  					var oft=Math.round(($scope.start+$scope.duration-new Date())/1000);
		  		 	if(oft>0){
		  		 		/*rankGroup.classes="green joined-group-box3";*/
		  		 		var ofd=parseInt(oft/3600/24);
						var ofh=parseInt((oft%(3600*24))/3600);
						var ofm=parseInt((oft%3600)/60);
						var ofs=oft%60;
						$scope.dao=("距结束： "+ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
		  		 	}
  			
  		 	
		},1000);
	
	return TimePromise;
};

});