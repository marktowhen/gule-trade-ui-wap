'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('OrderConfirmationParantController',
    function ($scope, $cookies, ConstantService,$cookieStore,OrderService,AuctionService,$state, PayService,
        MyReceiveAddressService, CashCouponService, DiscountCouponService, CouponService, PostageService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);


    $scope.purchaseVo = {'addressid':'', 'city':'', 'address':'', 'receiver':'', 'mobile':'', 'zipcode':'',
                'couponID':'', 'couponType':'', 'invoiceType':'', 'invoiceTitle':'',
                'paytypeCode':'ONLINE', 'paytypeName':'线上支付',
                'orders':[
                    {'MID':'', 'mname':'', 'deliveryTypeCode':'D002',
                    'deliveryTypeName':'普通快递', 'postage':'', 'price':'',
                    'goods':[
                        {'GID':'', 'gname':'', 'price':'', 'count':''},
                        {'GID':'', 'gname':'', 'price':'', 'count':''}
                    ]}
                ]};


    OrderService.listOrders2Clearing().success(function(data){
        $scope.transaction = data.body;
        var price = 0;
        if($scope.transaction && $scope.transaction.orders){
            $scope.finalmoney = $scope.transaction.totalPrice;
            $scope.pureOriginMoney = $scope.transaction.totalPriceWithoutPostage;
            $scope.originpostage = $scope.finalmoney - $scope.pureOriginMoney;
            $scope.type=$scope.transaction.orders[0].type;
            $scope.auctionid=$scope.transaction.orders[0].extradata;
           /* auctionDetail($scope.auctionid);*/
        }else{
            alert("订单信息不正确。");
            //$state.go("cart");//should be go to illegal order page.
            return;
        }

    });

    $scope.$watch('$viewContentLoaded', function() {
       listCashCoupon();
       listDiscountCoupon();
    });

    $scope.$on("activeCashCoupon",
          function (event, msg) {
            listCashCoupon();
            $("#recharge-voucher-dialog").modal("hide");
            $("#recharge-shopping-gold-dialog").modal("hide");
          }
    );
    $scope.$on("activeDiscountCoupon",
          function (event, msg) {
            listDiscountCoupon();
            $("#recharge-voucher-dialog").modal("hide");
            $("#recharge-shopping-gold-dialog").modal("hide");
          }
    );

    var listCashCoupon = function(){
        CashCouponService.getUnusedCoupon(uid).success(function(data){
            $scope.cashcoupons = data.body;
        });
    };

    var listDiscountCoupon = function(){
         DiscountCouponService.getUnusedCoupon(uid).success(function(data){
            $scope.discountcoupons = data.body;
        });
    };


    $scope.pureOriginMoney = 0;//没有邮费的订单价格
    $scope.originpostage = 0;//总邮费
    $scope.finalmoney = 0;//包含邮费的订单总价
    $scope.finalpoint = 0;
    $scope.$watch("finalmoney", function(oldv, newv){
        $scope.finalpoint = Math.floor($scope.finalmoney / 100);
    });
    $scope.$watch("originpostage", function(oldv, newv){
        $scope.finalmoney = $scope.pureOriginMoney + $scope.originpostage;
    });


    OrderService.listPaytype().success(function(data){
        $scope.paytypes = data.body;
    });

    $scope.submit = function(){

        if(!$scope.transaction || !$scope.transaction.orders){
            alert("订单信息有误，请检查后重新提交");
            return;
        }

        /*if($scope.purchaseVo.couponID && $scope.transaction.orders.length > 1){
            $("#confirm-dialog").modal("show");
            return;
        }*/
        $scope.confirmSubmit();

    };

    $scope.confirmSubmit = function(){
       
        angular.forEach($scope.transaction.orders, function(order, index){
            order.deliveryTypeCode = 'EXPRESS';
            order.deliveryTypeName = '普通快递';
        });
        /*if($scope.type=="AUCTION"){
        	 angular.forEach($scope.purchaseVo.orders, function(order, index){
                 order.price = $scope.finalmoney;
             });
        }*/
        OrderService.submit($scope.transaction)
            .success(function(data){
                if(data.ok){
                	/*if($scope.type=="AUCTION"){
                		//alert("跳转到支付页面");
                		$cookieStore.put("id",$scope.cookAuctionID);
                		$cookieStore.put("gid",$scope.cookAuctionGoodID);
                		$state.go("auction-success");
                	}*/
                    var purchaseVo = data.body;
                    var orders = purchaseVo.orders;
                    var oids = [];
                    for(var i = 0; i < orders.length; i++){
                        oids.push(orders[i].id);
                    }
                    if($scope.finalmoney == 0){
                        $state.go("payment-success");
                        return;
                    }else{
                        //$state.go("order-success.detail", {"oids": oids.join("&")});
                        PayService.prepay({
                            'pipelineCode':'WXJSAPIPAY',
                            'pipelineName':'JSAPIPAY',
                            'bankCode':'NONE',
                            'orderids':oids
                        }).success(function(data){
                            WeixinJSBridge.invoke(
                               'getBrandWCPayRequest', data.body,
                               function(res){
                                   if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                                        alert("ok");
                                   }
                                   // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                                   console.log(res);
                               }
                           );
                        }).error(function(data){
                            alert("网络异常，请稍后重试。");
                        });
                        return;
                    }
                }else if(data.code == 400){
                    $("#login-dialog").modal("show");
                }else{
                    alert(data.message);
                }
            }).error(function(data){
                alert("订单信息有误，请检查后重新提交");
            });
    };

    $scope.selectAddress = function(address){
        $scope.purchaseVo.addressid = address.id;
        $scope.purchaseVo.city = address.city;
        $scope.purchaseVo.address = address.countryName+'-'+address.provinceName+'-'+address.cityName+'-'+address.address;
        $scope.purchaseVo.receiver = address.receiver;
        $scope.purchaseVo.mobile = address.mobile;
        $scope.purchaseVo.zipcode = address.zipcode;
        $scope.useDiscountCoupon = false;
        $scope.useCashCoupon = false;
        $scope.purchaseVo.couponType = '';
        $scope.purchaseVo.couponID = '';

        var postagequery = {};
        postagequery.merchants = [];
        if(!$scope.transaction || !$scope.transaction.orders){
            return;
        }
        for (var i = 0; i < $scope.transaction.orders.length; i++) {
            var o = $scope.transaction.orders[i];
            var merchant = {};
            merchant.mid = o.mid;
            merchant.goods = [];
            for(var j = 0; j < o.goods.length; j++){
                var gs = {};
                gs.gid = o.goods[j].gid;
                gs.transportType = 'EXPRESS';
                gs.city = address.city;
                merchant.goods.push(gs);
            }
            postagequery.merchants.push(merchant);
        };
        PostageService.calculate(postagequery).success(function(data){
            if(data.ok){
                var postageresponse = data.body;
                if(!postageresponse | !postageresponse.merchants) return;
                console.log(postageresponse);
                var olen = $scope.transaction.orders.length;
                var newpostage = 0;
                for (var i = 0; i < postageresponse.merchants.length; i++) {
                    var p = postageresponse.merchants[i];
                    for (var j = 0; j < olen; j++) {
                        if($scope.transaction.orders[j].mid === p.mid){
                            var oldpostage = $scope.transaction.orders[j].postage;
                            var oldprice = $scope.transaction.orders[j].price;
                            $scope.transaction.orders[j].postage = p.postage;
                            $scope.transaction.orders[j].price = (oldprice - oldpostage) + p.postage;
                            newpostage += ($scope.transaction.orders[j].postage);
                        }
                    };
                };
                $scope.originpostage = newpostage;
            }else{
                alert(data.message);
            }
        }).error(function(data){
            alert("网络异常，请稍后重试。");
        });
    };
    $scope.selectPaytype = function(paytype){
        $scope.purchaseVo.paytypeCode = paytype.code;
        $scope.purchaseVo.paytypeName = paytype.name;
    };
    $scope.gobackCart = function(){
        $state.go("cart");
    };
    
    /*var auctionDetail=function(auctionid){
 	   AuctionService.detail(auctionid)
 		.success(function(data){
 			if(data.ok){
 				$scope.auction = data.body;
 				$scope.cookAuctionID=$scope.auction.id;
 				$scope.cookAuctionGoodID=$scope.auction.gid;
 				
 				if($scope.type=="AUCTION"){
 					$scope.finalmoney=$scope.auction.deposit;
 					
 				}else{
 					$scope.goodPrice=$scope.auction.soldPrice-$scope.auction.deposit;
 				}
 			}
 		}).error(function(data){
 			
 		});
 	   
    } */
    
    
});
