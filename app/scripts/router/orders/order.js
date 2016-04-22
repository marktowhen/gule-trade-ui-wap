'use strict';
/**
*路由定义
*/
wapApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider){
	$stateProvider
    .state('shoppingcart', {
        templateUrl: 'views/orders/shoppingcart.html',
        controller: '',
        url:"/shoppingcart.html"
      })
    .state('orderconfirm', {
      abstract: true,
      templateUrl: "views/orders/order.confirm.parent.html",
      url:"/orders"
    })
    .state('orderconfirm.page', {
        templateUrl: 'views/orders/order.confirm.html',
        controller: '',
        url:"/confirmation.html"
      })
    .state('orderconfirm.address', {
      abstract: true,
        templateUrl: 'views/orders/address.parent.html',
        controller: '',
        url:"/address"
      })
    .state('orderconfirm.address.list', {
        templateUrl: 'views/orders/address.list.html',
        controller: '',
        url:"/list.html"
      })
     .state('orderconfirm.address.edit', {
        templateUrl: 'views/orders/address.edit.html',
        controller: '',
        url:"/edit.html?id"
      });
});