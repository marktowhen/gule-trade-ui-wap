'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('MyAuctionOverController', function ($scope, AuctionService,$interval) {
		
		$scope.ggoods = [];
		var size = 20;
		var hasMore = true;
		AuctionService.listWithCondition(0, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						if('AUCTIONING'==data.body[i].status){
						}
						runTiming(data.body[i]);//倒计时处理
						addTimes(data.body[i]);// 竞拍出价次数处理
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}

					//scrollListen();
					
				}
			}).error(function(data){

			});


		
		
		
		//瀑布流追加方法
   /*   var pushContent = function (){
		     AuctionService.listWithCondition($scope.ggoods.length, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						$scope.ggoods .push( data.body[i]);
					}
				}
			}).error(function(data){

			});

      };*/

		  ////瀑布流追加
	/*	var scrollListen = function(){
			if($("#page_id").val()=='GroupGoodsList')  {
				
				 $(window).scroll(function(){
		           if (hasMore && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)  ){  //滚动条距离底部不足80px时触发
		                pushContent();
		              }
		          
		       });	
			}
		}*/

		
		//查询出价次数
		var addTimes = function(auction){
	    var times=0;
	    AuctionService.addTimes(auction.id).success(function(data){
	    	if(data.ok){
	    		auction.times=data.body;
			}
		}).error(function(data){

		});
      }
		
		
		//竞拍时间格式处理
		var TimePromise;
	  	var runTiming = function(auction){
	  		var EndTime = new Date(auction.startTime)
	  		$scope.endtime=auction.endTime;
	  		$scope.starttime = auction.startTime;	
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  		var zft=Math.round(($scope.starttime-new Date())/1000);
	  					if(zft>0){
	  						//即将开始
	  						var ofd=parseInt(zft/3600/24);
							var ofh=parseInt((zft%(3600*24))/3600);
							var ofm=parseInt((zft%3600)/60);
							var ofs=zft%60;
							//auction.end=(ofh+ '时' +ofm+ '分' +ofs+'秒');
							auction.ofh=ofh;  //时
							auction.ofm=ofm;  //分
							auction.ofs=ofs;  //秒
			  		 		return TimePromise;
			  		 	}else if(zft<0&&oft<0){
			  		 		//已结束
			  		 		//auction.end=("00时00分00秒");
			  		 		auction.ofd="00";  //时
			  		 		auction.ofh="00";  //时
							auction.ofm="00";  //分
							auction.ofs="00";  //秒
			  		 		return TimePromise;
			  		 	}
	  		TimePromise = $interval(function(){
	  			$scope.endtime=auction.endTime;
		  		$scope.starttime = auction.startTime;	
		  		var oft=Math.round(($scope.endtime-new Date())/1000);
		  		var zft=Math.round(($scope.starttime-new Date())/1000);
			  		 	if(zft<=0&&oft>0){
			  		 		//正在竞拍
			  		 		var ofd=parseInt(oft/3600/24);
							var ofh=parseInt((oft%(3600*24))/3600);
							var ofm=parseInt((oft%3600)/60);
							var ofs=oft%60;
							//auction.end=(ofh+ '时' +ofm+ '分' +ofs+'秒');
							auction.ofd=ofd;  //日
							auction.ofh=ofh;  //时
							auction.ofm=ofm;  //分
							auction.ofs=ofs;  //秒
			  		 	}
	  			
	  		 	
			},1000);
		
		return TimePromise;
		
	  	}
	
	
});