'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 //待发货的产品
 wapApp.controller('OrdersPaidController', function ($scope, ConstantService, OrderService, OrderStatusService, $state, $cookies, CartService) {
 	var size =3;
	var more =true;
 	var statuscode = OrderStatusService.ACCEPT_CODE;
 	var anystatus = 1;
 	$scope.orders=[];
 	/*
	var loginuid = $cookies.get(ConstantService.LOGIN_ID_KEY);
 	if(!loginuid){
        Dialog.alert($scope, "请先登录");
        return;
    }*/
    OrderService.listWithCondition("Ma9ogkIXSW-y0uSrvfqVIQ",statuscode,anystatus,0,size).success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				$scope.orders.push(data.body[i]);
 			}
 			if(data.body.length<size){
 				more=false;
 			}

 			scrollBars();//调用瀑布流
 		}
 	});
 	$scope.deleteOrder = function(order){
 		OrderService.cancel(order.id).success(function(data){
	 		if(data.ok){
	 		
	 				OrderService.listWithCondition("Ma9ogkIXSW-y0uSrvfqVIQ",OrderStatusService.ACCEPT_CODE,anystatus,0,4).success(function(data){
				 		if(data.ok){
				 			for(var i=0;i<data.body.length;i++){
				 				$scope.orders.push(data.body[i]);
				 			}
				 			if(data.body.length<size){
 								more=false;
 							}

 							scrollBars();//调用瀑布流
				 		}
	 				})
 			}else{
 				alert("订单取消失败");
 			}

 		})
 	}

 	//瀑布流的方法
 	var falls = function(){
 		OrderService.listWithCondition("Ma9ogkIXSW-y0uSrvfqVIQ",statuscode,anystatus,$scope.orders.length,size).success(function(data){
 			if(data.ok){
 				for(var i=0;i<data.body.length;i++){
 					$scope.orders.push(data.body[i]);
 				}
 			}
 		})
 	}
 	var scrollBars = function(){
 		if($("#pageId").val()=="paid"){
 			$(window).scroll(function(){
				if(more && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)){//滚动条的距离底部不足70px时触发
					falls();
				}
			})
 		}
 	}

})