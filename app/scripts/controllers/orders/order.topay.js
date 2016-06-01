'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('OrdersToPayController', function ($scope, ConstantService, OrderService, OrderStatusService, $state, $cookies, CartService) {
 	/*必须授权之后才可以进入这个待支付页面*/
 	var size = 4;
	var more =true;
 	var statuscode = OrderStatusService.NEW_CODE;
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
 	//取消订单
 	$scope.deleteOrder = function(order){
 		OrderService.cancel(order.id).success(function(data){
	 		if(data.ok){
	 			$state.go('orderhistory.all');
 			}

 		})
 	}
 	//立即支付
 	
 	$scope.payment = function(order,goods){
 		var cartvo = {};
    	cartvo.orders = [];
    	var order0 = {};
 		order0.mid=order.mid;
 		order0.mname=order.mname;
 		order0.type = 'BASE';
 		order0.goods = [];
 		var goods0 = {};
 		goods0.gid = goods.gid;
 		goods0.skuid = goods.skuid;
 		goods0.gname = goods.gname;
 		goods0.mid = order.mid;
        goods0.mname = order.mname;
 		goods0.price = goods.price;
 		goods0.pprice = goods.pprice;
 		goods0.count = goods.count;
 		order0.goods.push(goods0);
 		cartvo.orders.push(order0);

 		 CartService.submit(cartvo).success(function(data){
 		 	if(data.ok){
              $state.go("orderconfirm.page");
              return;
          	}else{
                alert(data.message);
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
 		if($("#pageId").val()=="topay"){
 			$(window).scroll(function(){
				if(more && ($(window).scrollTop() >= $(document).height()-$(window).height()-70)){//滚动条的距离底部不足70px时触发
					falls();
				}
			})
 		}
 	}
 })