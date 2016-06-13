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
	var more =false;
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
 			
 				more=false;
 			
 		}
 	});
 /*	$scope.deleteOrder = function(order){
 		OrderService.cancel(order.id).success(function(data){
	 		if(data.ok){
	 		
	 				OrderService.listWithCondition("Ma9ogkIXSW-y0uSrvfqVIQ",OrderStatusService.ACCEPT_CODE,anystatus,0,4).success(function(data){
				 		if(data.ok){
				 			for(var i=0;i<data.body.length;i++){
				 				$scope.orders.push(data.body[i]);
				 			}
				 			
 								more=false;
 							
				 		}
	 				})
 			}else{
 				alert("订单取消失败");
 			}

 		})
 	}*/

 	//瀑布流的方法
 	var falls = function(){
 		OrderService.listWithCondition("Ma9ogkIXSW-y0uSrvfqVIQ",statuscode,anystatus,$scope.orders.length,size).success(function(data){
 			if(data.ok){
 				for(var i=0;i<data.body.length;i++){
 					$scope.orders.push(data.body[i]);
 				}
 				more=false;
 			}
 		})
 	}
 	////瀑布流追加
        $(window).scroll(function(){
          if($scope.orders.length < size){

          }else{
           if (($(window).scrollTop() >= $(document).height()-$(window).height()-70) && !more ){  //滚动条距离底部不足80px时触发
                falls();
                more = true;
              }
          }
       });

})