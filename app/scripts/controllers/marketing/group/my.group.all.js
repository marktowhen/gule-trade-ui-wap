'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('MyGroupAllController', function ($scope,$interval,$state,GroupBuyService, $stateParams) {
 	$scope.notshow = false;
 	$scope.GroupList = [];
 	GroupBuyService.getgroup().success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				GroupBuyService.getgroupgoods(data.body[i].groupID).success(function(data1){
 					if(data1.ok){
 						var group = data1.body;
 						/*console.log("ooo"+data1.body.path);*/
 						group.showhide=false;
 						if(data1.body.status=="CONVENING"){
 							
 							group.type="组团中";
 							group.showhide=true;
 							TimeDown(group);
 						}else if(data1.body.status=="PAID"){
 							group.type="已成团";

 						}else if(data1.body.status=="CLOSED"){
 							group.type="组团失败";
 						}
 						$scope.GroupList.push(data1.body);
 						
 					}

 				})
 				
 				
 			}
 			if(data.body.length==0){
 				$scope.notshow=true;
 			}
 		}
 		
 		
 	})


 	var TimePromise;
		var TimeDown = function(group){
			$scope.duration=group.goods.duration;
			var oft=Math.round(($scope.duration)/1000);
			if(oft<=0){
					group.time="00:00:00:00"
					return TimePromise;
			}
			TimePromise = $interval(function(){

				var oft=Math.round(parseInt($scope.duration--));
				if(oft>0){
					var ofd=parseInt(oft/3600/24);
					var ofh=parseInt((oft%(3600*24))/3600);
					var ofm=parseInt((oft%3600)/60);
					var ofs=oft%60;
					group.time=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
				}

			},1000);

			return TimePromise;
			
		}
 	$scope.isIng = function(group){
 		return group.status=="CONVENING";
 	}
 	$scope.isSuccess = function(group){
 		return group.status=="PAID";
 	}
 	$scope.isFail = function(group){
 		return group.status=="CLOSED";
 	}

 })