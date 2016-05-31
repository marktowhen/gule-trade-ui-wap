'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('MyNewController',function ($scope,$state, $cookies, MyNewService,$stateParams,ConstantService) {
 	var size = 8;
	var more =true;
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
 			if(data.body.length<size){
 				more = false;
 			}
 			scrollBars();//调用瀑布流
 		};
 	});
 	
	$scope.updateStatus=function(id){
		$state.go('news1',{id:id});
		alert(list.id);	
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
 			}
 		})
 	}
 	var scrollBars = function(){
		if($("#pageId").val()=='new'){
			$(window).scroll(function(){
				if(more && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)){//滚动条的距离底部不足70px时触发
					falls();
				}
			})
		}
	}

 })