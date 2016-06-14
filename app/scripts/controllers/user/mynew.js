'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('MyNewController',function ($scope,$state, $cookies, MyNewService,$stateParams,ConstantService) {
 	var size = 9;
	var more =false;
	$scope.newList = [];
	//登陆时默认保存的uid
	var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
 	MyNewService.list("Ma9ogkIXSW-y0uSrvfqVIQ",0,size).success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				var list=data.body[i];
 				if(list.hasRead){
 					list.class = "left fl icon-me-tz colorss";
 				}else{
 					list.class = "left fl icon-me-tz";
 				}
 				$scope.newList.push(data.body[i]);
 				
 			}
 			more=false;
 		};
 	});
 	
	$scope.updateStatus=function(id){
		$state.go('news1',{id:id});
	}

	var falls = function(){
 		MyNewService.list("Ma9ogkIXSW-y0uSrvfqVIQ",$scope.newList.length,size).success(function(data){
 			if(data.ok){
 				for(var i=0;i<data.body.length;i++){
 					var list=data.body[i];
 					if(list.hasRead){
				 		list.class = "left fl icon-me-tz colorss";
				 	}else{
				 		list.class = "left fl icon-me-tz";
				 	}
 					$scope.newList.push(data.body[i]);
 				}
 				more=false;
 			}
 		})
 	}
 	
	////瀑布流追加
        $(window).scroll(function(){
          if($scope.newList.length < size){

          }else{
           if (($(window).scrollTop() >= $(document).height()-$(window).height()-70) && !more ){  //滚动条距离底部不足80px时触发
                falls();
                more = true;
              }
          }
       });

 })