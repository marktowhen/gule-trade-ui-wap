'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionListController', 
	['$scope', 'AuctionService', function ($scope, AuctionService) {
		
		$scope.ggoods = [];
		var size = 20;
		var hasMore = true;
		AuctionService.listWithCondition(0, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
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

		
      
	
}]);