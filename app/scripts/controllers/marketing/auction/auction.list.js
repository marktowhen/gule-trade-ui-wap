'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionListController', function ($scope, AuctionService,$interval) {
		
		$scope.ggoods = [];
		var size = 20;
		var hasMore = true;
		AuctionService.listWithCondition(0, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						if('AUCTIONING'==data.body[i].status){
						}
						runTiming(data.body[i]);
/*						alert(data.body[i].end)
*/						data.body[i].times=10;
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}

					scrollListen();
					
				}
			}).error(function(data){

			});


		
		
		
		//瀑布流追加方法
      var pushContent = function (){
		     AuctionService.listWithCondition($scope.ggoods.length, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						$scope.ggoods .push( data.body[i]);
					}
				}
			}).error(function(data){

			});

      };

		  ////瀑布流追加
		var scrollListen = function(){
			if($("#page_id").val()=='GroupGoodsList')  {
				
				 $(window).scroll(function(){
		           if (hasMore && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)  ){  //滚动条距离底部不足80px时触发
		                pushContent();
		              }
		          
		       });	
			}
		}

		
		//查询出价次数
		var addTimes = function(gid){
	    var times=0;
	    AuctionService.count(gid)
	    
	    
	    	return times;
	    }
		
		
		
		//竞拍时间格式处理
		var TimePromise;
	  	var runTiming = function(auction){
	  		var EndTime = new Date(auction.startTime)
	  		alert(EndTime)
	  		$scope.endtime=auction.endTime;
	  		$scope.starttime = auction.startTime;	
	  		alert($scope.endtime)
	  		alert($scope.starttime)
	  		var oft=Math.round(($scope.endtime-new Date())/1000);
	  		var zft=Math.round(($scope.starttime-new Date())/1000);
	  					if(zft>0){
	  						var ofd=parseInt(zft/3600/24);
							var ofh=parseInt((zft%(3600*24))/3600);
							var ofm=parseInt((zft%3600)/60);
							var ofs=zft%60;
							auction.end=(ofd+' 天 ' +ofh+ ' 时 ' +ofm+ ' 分 ' +ofs+' 秒');
			  		 		return TimePromise;
			  		 	}else if(zft<0&&oft<0){
			  		 		auction.end=("距结束： 00时00分00秒");
			  		 		return TimePromise;
			  		 	}
	  		TimePromise = $interval(function(){
	  			$scope.endtime=auction.endTime;
		  		$scope.starttime = auction.startTime;	
		  		var oft=Math.round(($scope.endtime-new Date())/1000);
		  		var zft=Math.round(($scope.starttime-new Date())/1000);
			  		 	if(zft<=0&&oft>0){
			  		 		var ofd=parseInt(oft/3600/24);
							var ofh=parseInt((oft%(3600*24))/3600);
							var ofm=parseInt((oft%3600)/60);
							var ofs=oft%60;
							auction.end=(ofd+' 天 ' +ofh+ ' 时 ' +ofm+ ' 分 ' +ofs+' 秒');
			  		 	}
	  			
	  		 	
			},1000);
		
		return TimePromise;
		
	  	}
	
	
});