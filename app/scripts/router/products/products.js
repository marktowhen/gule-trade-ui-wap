'use strict';
/**
*路由定义
*/
wapApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider){
	$stateProvider
    .state('products', {
        templateUrl: 'views/products/products.html',
        controller: '',
        url:"/products.html?mid?goodsname"
      }).state('product-details', {
        templateUrl: 'views/products/product.details.html',
        controller: '',
        url:"/product/details.html?gid"
      });
});