'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('MyNewController',function ($scope, $cookies, MyNewService,$stateParams,ConstantService) {
 	var size = 10;
	var more =true;
	$scope.newList = [];
	//登陆时默认保存的uid
	var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
 	MyNewService.list("Ma9ogkIXSW-y0uSrvfqVIQ",0,size).success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				var list=data.body[i];
 				if(list.hasRead){
 					list.class = "newslist seen";
 				}else{
 					list.class = "newslist";
 				}
 				$scope.newList.push(data.body[i]);
 				
 			}
 			if(data.body.length<size){
 				more = false;
 			}
 			scrollBars();//调用瀑布流
 		};
 	});
 	var falls = function(){
 		MyNewService.list("Ma9ogkIXSW-y0uSrvfqVIQ",$scope.newList.length,size).success(function(data){
 			if(data.ok){
 				for(var i=0;i<data.body.length;i++){
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
	$scope.updateStatus=function(list){
		
		if(list.class=="newslist seen active"){
			list.class="newslist seen";
		}else{
			list.class="newslist seen active";
		}
		MyNewService.updatestatus(list.id).success(function(data){
			if(data.ok){
					MyNewService.list("Ma9ogkIXSW-y0uSrvfqVIQ",0,size).success(function(data){
				 		if(data.ok){
				 			for(var i=0;i<data.body.length;i++){
				 				var list=data.body[i];
				 				if(list.hasRead){
				 					list.class = "newslist";
				 				}else{
				 					list.class = "newslist seen";
				 				}
				 				$scope.newList.push(data.body[i]);
				 				
				 			}
				 			if(data.body.length<size){
				 				more = false;
				 			}
				 			scrollBars();//调用瀑布流
				 		}
 					})
			}else{
				alert("修改状态出错");
			}
		})
	}

 })