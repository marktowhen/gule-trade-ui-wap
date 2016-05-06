'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 
wapApp.controller('FlashSaleListController', function ($scope, $cookies,$state,$stateParams,FlashSaleService,$interval) {
	var size = 5;
	$scope.flashsale = [];
	FlashSaleService.list(0,size).success(function(data){
		if(data.ok){
			for (var i = 0; i < data.body.length; i++) {
				alert(data.body[i].id);
				runTiming(data.body[i]);
				
				$scope.flashsale.push(data.body[i]);
			}
		}
	})
	$scope.BtnValue="";
	var TimePromise;
	  	var runTiming = function(fs){
	  		TimePromise = $interval(function(){
	  				$scope.endtime=new Date(fs.activityTime);
	  				$scope.showtime = new Date(fs.showTime);	
	  					var oft=Math.round(($scope.endtime-new Date())/1000);
			  		 	if(oft>0||fs.stock>0){
			  		 		$(".one-list-box2-right fr").addClass('green');
			  		 		$scope.BtnValue="即将开始";
			  		 	}else if(oft<=0||fs.stock>0){
			  		 		$scope.BtnValue="立即秒杀";
			  		 	}else if(oft<=0||fs.stock==0){
			  		 		$(".one-list-box2-right fr").addClass('gray');
			  		 		$scope.BtnValue="已结束";
			  		 	}
						var ofd=parseInt(oft/3600/24);
						var ofh=parseInt((oft%(3600*24))/3600);
						var ofm=parseInt((oft%3600)/60);
						var ofs=oft%60;
						fs.dao=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
	  			
	  		 	
			},1000);
		
		return TimePromise;
	};
	$scope.godetail = function(id){
		$state.go('flashsale1',{id:id});
	};

})