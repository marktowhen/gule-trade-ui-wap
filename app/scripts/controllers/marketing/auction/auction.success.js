'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('AuctionSuccessController',
    function ($scope,$interval,$state,$stateParams,$location,AuctionService) {
	$scope.time=3;
	var timer=null;
	timer=$interval(function(){
		$scope.time = $scope.time - 1;
        if($scope.time === 0) {
        	$interval.cancel(timer);
        	$stateParams.key="hall";
        	//根据订单oid  查询auction_order表获得 商品id goodid 以及 竞拍商品auctionid
        	var id="VkkfDqkPR6upgaY_NA4WYA";
        	var gid="6J5oe2uzTVuUCP-P3-sJbA";
        	window.location.href="#/auction-details.html?id="+id+"&gid="+gid+"&key=hall";
        	//$state.go("auction-details")

        }
    }, 1000);
	
	
/*	$scope.id="VkkfDqkPR6upgaY_NA4WYA";
	AuctionService.goDetail($scope.id)
	.success(function(data){
		if(data.ok){
			alert("dddddddddddddddd")
			
		}
	}).error(function(data){
		
	});*/
    
});
