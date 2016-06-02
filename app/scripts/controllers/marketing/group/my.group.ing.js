'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
  wapApp.controller('MyGroupIngController', function ($scope,$interval,$state,GroupBuyService, $stateParams) {
  		$scope.GroupList = [];
 	GroupBuyService.getgroup("Ma9ogkIXSW-y0uSrvfqVIQ").success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				GroupBuyService.getgroupgoods(data.body[i].groupID).success(function(data1){
 					if(data1.ok){
 						
 						if(data1.body.status=="CONVENING"){
 							var grouping = data1.body;
 							TimeDown(grouping);
 							$scope.GroupList.push(data1.body);
 						}
 						
 						
 					}

 				})
 				
 				
 			}
 		}
 		
 		
 	})


 	var TimePromise;
		var TimeDown = function(grouping){
			$scope.duration=grouping.goods.duration;
			var oft=Math.round(($scope.duration)/1000);
			if(oft<=0){
					grouping.time="00:00:00:00"
					return TimePromise;
			}
			TimePromise = $interval(function(){

				var oft=Math.round(parseInt($scope.duration--));
				if(oft>0){
					var ofd=parseInt(oft/3600/24);
					var ofh=parseInt((oft%(3600*24))/3600);
					var ofm=parseInt((oft%3600)/60);
					var ofs=oft%60;
					grouping.time=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
				}

			},1000);

			return TimePromise;
			
		}




		$scope.inviteFriend = function(){
			$state.go("joined-group");
		}
  })