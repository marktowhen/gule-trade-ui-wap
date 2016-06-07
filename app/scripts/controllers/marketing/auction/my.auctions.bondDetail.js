'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('MyAuctionBondDetailController', function ($scope, AuctionService,$interval) {
		
	//定金详情
	  AuctionService.depositStatus('VkkfDqkPR6upgaY_NA4WYA',"").success(function(data){
			if(data.ok){
				$scope.deposit=data.body;
			}
			}).error(function(dataDeposit){
				
			});
	
	
	
});