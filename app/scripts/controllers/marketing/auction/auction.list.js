'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionListController', 
	['$scope', 'AuctionService','$interval', function ($scope, AuctionService,$interval) {
		
		$scope.ggoods = [];
		var size = 20;
		var hasMore = true;
		AuctionService.listWithCondition(0, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						if('AUCTIONING'==data.body[i].status){
							getEndTime(data.body[i]);
						}
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}

					scrollListen();
					
				}
			}).error(function(data){

			});


		////瀑布流追加方法
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

		var getEndTime = function (auction){
			$interval(function(){
                var EndTime = new Date(auction.endTime); //截止时间 前端路上 http://www.51xuediannao.com/qd63/
		        var NowTime = new Date();
		        var t =EndTime.getTime() - NowTime.getTime();

		        if(t<=0){
		        	auction.end = {'day':0,'hour':0,'minute':0,'second':0};
		        	AuctionService.single(auction.id).success(function(data){
		        		auction = data.body;
		        	})
		        	return;
		        }

		        
		        
		        var d=addZero(Math.floor(t/1000/60/60/24));
		        var h=addZero(Math.floor(t/1000/60/60%24));
		        var m=addZero(Math.floor(t/1000/60%60));
		        var s=addZero(Math.floor(t/1000%60));

		        auction.end = {'day':d,'hour':h,'minute':m,'second':s};
	          }, 1000, 100);
	        
	    }

	    var addZero = function(i){
	    	if(i<10 && i>=0){
	    		return '0'+i;
	    	}
	    	return i;
	    }


		
      
	
}]);