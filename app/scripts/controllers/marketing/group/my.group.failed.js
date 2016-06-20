'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
   wapApp.controller('MyGroupFailedController', function ($scope,$state,GroupBuyService, $stateParams) {
  		$scope.GroupList = [];
 	GroupBuyService.getgroup().success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				GroupBuyService.getgroupgoods(data.body[i].groupID).success(function(data1){
 					if(data1.ok){
 						if(data1.body.status=="CLOSED"){
 							$scope.GroupList.push(data1.body);
 						}
 						
 						
 					}

 				})
 				
 				
 			}
 		}
 		
 		
 	})
  })