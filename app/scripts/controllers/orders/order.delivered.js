'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
  wapApp.controller('OrdersDeliveredController', function ($scope, ConstantService, OrderService, OrderStatusService, $state, $cookies, CartService) {
  var size = 4;
	var more =true;
 	var statuscode = OrderStatusService.DELIVERED_CODE;
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

  /*对接确认收货
  order-receipt.js
  /*通过oid查出这个信息
  var oid = $stateParams.oid;
    OrderService.singleOrder(oid)
        .success(function(data){
            $scope.order = data.body;
        });
    //点击确认收货按钮的操作
   $scope.confirmReceipt = function(){
        if($scope.tradepwd){
            $scope.tradepwderror = false;
            OrderService.confirmReceipt(oid, $scope.tradepwd)
            .success(function(data){
                if(data.ok){
                    Dialog.success($scope, "您已成功确认收货，本次交易成功，谢谢！")
                    .on("hide.bs.modal", function(e){
                        $state.go("user-center.my-order");
                    });
                }else{
                    Dialog.alert($scope, data.message);
                }
            });
        }else{
            $scope.tradepwderror = true;
        }
    };
  
  
  */


  })