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
				console.log($scope.goods);
			}
			
		});
			
	};
	$scope.BtnValue="";
	var TimePromise;
	  	var runTiming = function(flashsale){
	  		TimePromise = $interval(function(){
	  				$scope.endtime=new Date(flashsale.activityTime);
	  				$scope.showtime = new Date(flashsale.showTime);	
	  					var oft=Math.round(($scope.endtime-new Date())/1000);
			  		 	if(oft>0||flashsale.stock>0){
			  		 		$(".one-list-box2-right fr").addClass('green');
			  		 		$scope.BtnValue="即将开始";
			  		 	}else if(oft<=0||flashsale.stock>0){
			  		 		$scope.BtnValue="立即秒杀";
			  		 	}else if(oft<=0||flashsale.stock==0){
			  		 		$(".one-list-box2-right fr").addClass('gray');
			  		 		$scope.BtnValue="已结束";
			  		 	}
						var ofd=parseInt(oft/3600/24);
						var ofh=parseInt((oft%(3600*24))/3600);
						var ofm=parseInt((oft%3600)/60);
						var ofs=oft%60;
						flashsale.dao=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
	  			
	  		 	
			},1000);
		
		return TimePromise;
	};

	$scope.toMerchant = function (mid){
		$state.go('products',{mid:mid});	
	};

})