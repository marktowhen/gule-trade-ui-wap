'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */

 wapApp.controller('LogisticsController', function ($scope,$stateParams, OrderService, $state, $cookies) {
 	var oid=$stateParams.oid;
    OrderService.singleOrder(oid)
        .success(function(data){
            $scope.order = data.body;
    });
 	OrderService.logistic(oid)
        .success(function(data){
            if(data.ok){
                $scope.logistic = data.body;
                if($scope.logistic!=null){
                     //通过查询出来的logistic信息 传入快递接口查询物流轨迹···
                    //oid 订单号
                    //$scope.logistic.expressCode  快递代码
                    //$scope.logistic.expressno     运单号
                    OrderService.logisticinfo(oid,$scope.logistic.expressCode.trim(),$scope.logistic.expressno.trim())
                    .success(function(data){
                                $scope.expressinfo = data.body;
                                $scope.expressinfo1=data.body[0];
                                $scope.expressinfo2=$scope.expressinfo.slice(1,data.body.length);
                                
                    });



                }
              
            }
        });
 })