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
        template: '<ui-view/>',
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
      })
			/**我的订单查询页面*/
			.state('order', {
	        templateUrl: 'views/orders/order.html',
	        controller: '',
	        url:"/order.html"
	      })
	    .state('order_nopay', {
	        templateUrl: 'views/orders/order_nopay.html',
	        controller: '',
	        url:"/order_nopay.html"
	      })
	    .state('order_nodeliver', {
	        templateUrl: 'views/orders/order_nodeliver.html',
	        controller: '',
	        url:"/order_nodeliver.html"
	      })
	    .state('order_delivered', {
	        templateUrl: 'views/orders/order_delivered.html',
	        controller: '',
	        url:"/order_delivered.html"
	      })
	    .state('order_received', {
	        templateUrl: 'views/orders/order_received.html',
	        controller: '',
	        url:"/order_received.html"
	      });
});
