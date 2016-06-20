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
	var more =false;
 	var statuscode = OrderStatusService.NEW_CODE;
 	var anystatus = 1;
 	$scope.orders=[];
 	/*
	var loginuid = $cookies.get(ConstantService.LOGIN_ID_KEY);
 	if(!loginuid){
        Dialog.alert($scope, "请先登录");
        return;
    }*/
    $scope.notshow = false;
 	OrderService.listWithCondition(statuscode,anystatus,0,size).success(function(data){
 		if(data.ok){
 			for(var i=0;i<data.body.length;i++){
 				$scope.orders.push(data.body[i]);
 			}
      if(data.body.length==0){
        $scope.notshow = true;
      }
 			
 				more=false;
 			
 		}
 	});
 	//取消订单
 	$scope.deleteOrder = function(order){
 		OrderService.cancel(order.id).success(function(data){
	 		if(data.ok){
	 			$state.go('order-history-all');
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
 		OrderService.listWithCondition(statuscode,anystatus,$scope.orders.length,size).success(function(data){
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