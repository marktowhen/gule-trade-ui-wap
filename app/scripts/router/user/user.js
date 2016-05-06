'use strict';
/**
*路由定义
*/
wapApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider){
	$stateProvider
		.state('user', {
		 templateUrl: 'views/user/user.html',
		 controller: '',
		 url:"/user.html"
	 })
	.state('user-info', {
		 templateUrl: 'views/user/user-info.html',
		 controller: '',
		 url:"/user-info.html"
	 })
		.state('address', {
      abstract: true,
        template: '<ui-view/>',
        controller: '',
        url:"/user/address"
      })
    .state('address.list', {
        templateUrl: 'views/user/address/address.list.html',
        controller: '',
        url:"/list.html"
      })
     .state('address.edit', {
        templateUrl: 'views/user/address/address.edit.html',
        controller: '',
        url:"/edit.html?id"
      })

			.state('coupon', {
					abstract: true,
	        templateUrl: 'views/user/coupon/coupon.parent.html',
	        controller: '',
	        url:"/user/coupon"
	      }).state('coupon.cash', {
		        templateUrl: 'views/user/coupon/coupon.cash.html',
		        controller: '',
		        url:"/cash.html"
		      }).state('coupon.discount', {
			        templateUrl: 'views/user/coupon/coupon.discount.html',
			        controller: '',
			        url:"/discount.html"
			      });
});