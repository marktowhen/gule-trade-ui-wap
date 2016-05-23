/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('OrdersAllController', function ($scope, ConstantService, OrderService, OrderStatusService, $state, $cookies, CartService) {
 	var size = 4;
	var more =true;
 	var statuscode = "";
 	var anystatus = 0
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
 	})

 	$scope.deleteOrder = function(order){
 		OrderService.cancel(order.id).success(function(data){
 			if(data.ok){
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
 				})
 			}
 		})
 	};
 	$scope.isnow=function(order){
 		return order.statusCode==OrderStatusService.NEW_CODE;
 	};
 	$scope.isreceived = function(order){
 		return order.statusCode==OrderStatusService.RECEIVED_CODE;
 	};
 	$scope.isdelivered = function(order){
 		return order.statusCode == OrderStatusService.DELIVERED_CODE;
 	};
 	$scope.isaccept = function(order){
 		return order.statusCode == OrderStatusService.ACCEPT_CODE;
 	};


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
 		if($("#pageId").val()=="topay"){
 			$(window).scroll(function(){
				if(more && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)){//滚动条的距离底部不足70px时触发
					falls();
				}
			})
 		}
 	}

 })