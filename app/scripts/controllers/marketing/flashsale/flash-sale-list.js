'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 
wapApp.controller('FlashSaleListController', function ($scope, $cookies,$state,$stateParams,FlashSaleService,$interval) {
	
	$scope.flashsale = [];
	var size = 4;
	//滚动条标志位
    var flag = false;
	FlashSaleService.list(0,size).success(function(data){
		if(data.ok){
			for (var i = 0; i < data.body.length; i++) {
				runTiming(data.body[i]);
				$scope.flashsale.push(data.body[i]);
			}
			flag = false;
		}
	});
	//瀑布流的方法
	var falls = function(){
		FlashSaleService.list($scope.flashsale.length,size).success(function(data){
			if(data.ok){
				for (var i = 0; i < data.body.length; i++) {
					runTiming(data.body[i]);
					$scope.flashsale.push(data.body[i]);
				}
				flag=false;
			}
		});
	};
	 ////瀑布流追加
        $(window).scroll(function(){
          if($scope.flashsale.length < $scope.pagesize){

          }else{
           if (($(window).scrollTop() >= $(document).height()-$(window).height()-70) && !flag ){  //滚动条距离底部不足80px时触发
                falls();
                flag = true;
              }
          }
       });
	
	var TimePromise;
	  	var runTiming = function(fs){
	  		$scope.endtime=new Date(fs.activityTime);
	  		$scope.showtime = new Date(fs.showTime);	
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  					if(oft<=0&&fs.stock>0){
	  						fs.classes="one-list-box2";
			  		 		fs.BtnValue="立即秒杀";
			  		 		fs.dao=('00:00:00:00');
			  		 		return TimePromise;
			  		 	}else if(oft<=0&&fs.stock==0){
			  		 		fs.classes="one-list-box2 gray";
			  		 		fs.BtnValue="已结束";
			  		 		fs.dao=('00:00:00:00');
			  		 		return TimePromise;
			  		 	}
	  		TimePromise = $interval(function(){
	  				$scope.endtime=new Date(fs.activityTime);
	  				$scope.showtime = new Date(fs.showTime);	
	  					var oft=Math.round(($scope.endtime-new Date())/1000);
			  		 	if(oft>0&&fs.stock>0){
			  		 		fs.classes="one-list-box2 green";
			  		 		/*$(".one-list-box2-right").addClass('fr green');*/
			  		 		fs.BtnValue="即将开始";
			  		 		var ofd=parseInt(oft/3600/24);
							var ofh=parseInt((oft%(3600*24))/3600);
							var ofm=parseInt((oft%3600)/60);
							var ofs=oft%60;
							fs.dao=(ofd+':' +ofh+ ':' +ofm+ ':' +ofs);
			  		 	}
						
	  			
	  		 	
			},1000);
		
		return TimePromise;
	};
	$scope.godetail = function(id){
		$state.go('one-details',{id:id});
	};

})