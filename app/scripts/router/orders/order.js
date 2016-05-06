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
        templateUrl: 'views/user/address/address.list.html',
        controller: '',
        url:"/list.html"
      })
     .state('orderconfirm.address.edit', {
        templateUrl: 'views/user/address/address.edit.html',
        controller: '',
        url:"/edit.html?id"
      })
			/**我的订单查询页面*/
			.state('orderhistory', {
				abstract:true,
				templateUrl: 'views/orders/history/order.history.parent.html',
				controller: function($scope){
					$scope.tabname = 'all';
				},
				url:"/orders/history"
			})
			.state('orderhistory.all', {
	        templateUrl: 'views/orders/history/order.history.all.html',
	        controller: function($scope){
						$scope.$parent.tabname = 'all';
					},
	        url:"/all.html"
	      })
	    .state('orderhistory.topay', {
	        templateUrl: 'views/orders/history/order.history.topay.html',
	        controller: function($scope){
						$scope.$parent.tabname = 'topay';
					},
	        url:"/topay.html"
	      })
	    .state('orderhistory.paid', {
	        templateUrl: 'views/orders/history/order.history.paid.html',
	        controller: function($scope){
						$scope.$parent.tabname = 'paid';
					},
	        url:"/paid.html"
	      })
	    .state('orderhistory.delivered', {
	        templateUrl: 'views/orders/history/order.history.delivered.html',
	        controller: function($scope){
						$scope.$parent.tabname = 'delivered';
					},
	        url:"/delivered.html"
	      })
	    .state('orderhistory.received', {
	        templateUrl: 'views/orders/history/order.history.received.html',
	        controller: function($scope){
						$scope.$parent.tabname = 'received';
					},
	        url:"/received.html"
	      });
});
