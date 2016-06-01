'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('OrderService', function ($http, $location, ApiService, PayService, $state) {
    
    this.listOrders2Clearing = function(){
        return $http.get(ApiService.api.order.listClearing);
    };
    this.listWithCondition = function(uid, statuscode,anystatus, from, size){
        return $http.get(
            ApiService.api.order.listWithCondition,
            {params:{'status':statuscode,'anystatus':anystatus,'from':from, 'size':size}});
    };
    this.listPaytype = function(){
        return $http.get(ApiService.api.pay.typelist);
    };
    this.singleOrder = function(oid){
        return $http.get(ApiService.api.order.singleByOID.replace(":oid", oid));
    };
    this.listTraces = function(oid){
        return $http.get(ApiService.api.order.listTraces.replace(":oid", oid));
    };
    this.logistic = function(oid){
        return $http.get(ApiService.api.order.logistic.replace(":oid", oid));
    };
    this.submit = function(purchaseVo){
        return $http.post(ApiService.api.order.submit, purchaseVo, {headers:{'Content-Type':'application/json;charset=UTF-8'}});        
    };
    this.cancel = function(oid){
        return $http.put(ApiService.api.order.cancel.replace(":oid", oid));
    };
  /*  this.cancel = function(ogid){

    }*/
    this.listOrderStatus = function(){
        return $http.get(ApiService.api.order.listOrderStatus);
    };

    this.getOrderAmount = function(statuscode, fromdate, keywords){
        return $http.get(
            ApiService.api.order.getOrderAmount,
            {params:{'status':statuscode, 'fromdate':fromdate, 'keywords':keywords}});
    }

    this.confirmReceipt = function(oid, tradepwd){
        return $http.put(ApiService.api.order.receipt, {'oid':oid, 'tradepwd': tradepwd}, {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };
    this.singleGoods = function(ogid){
        return $http.get(ApiService.api.order.goods.single.replace(':ogid',ogid));
    };

    this.logisticinfo = function (oid,code,codeid) {
        return $http.get(ApiService.api.order.expressinfo.replace(':oid',oid)
            .replace(':code',code).replace(':codeid',codeid));
    };
    this.confirmDelivered = function(oid){
        return $http.put(ApiService.api.order.confirmDelivered.replace(':oid',oid));
    };
    this.singleorder = function(oid){
        return $http.get(ApiService.api.order.singleorder.replace(':oid',oid));
    };
});
