'use strict';

/**
 * @ngdoc overview
 * @name etradewapApp
 * @description
 * # etradewapApp
 *
 * Main module of the application.
 */

var wapApp = angular
  .module('etradewapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('index', {
        templateUrl: 'views/index/index_app.html',
        controller: '',
        url:"/"
      })
    .state('index_app', {
        templateUrl: 'views/index/index_app.html',
        controller: '',
        url:"/index_app.html"
      })
    .state('products', {
        templateUrl: 'views/products/products.html',
        controller: '',
        url:"/products.html"
      })
    .state('shoppingcart', {
        templateUrl: 'views/orders/shoppingcart.html',
        controller: '',
        url:"/shoppingcart.html"
      })
    .state('order-confirmation', {
        templateUrl: 'views/orders/confirm.html',
        controller: '',
        url:"/orders/confirmation.html"
      })
    .state('order-address-list', {
        templateUrl: 'views/orders/address.list.html',
        controller: '',
        url:"/orders/address/list.html"
      })
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
     .state('eceipt-address', {
        templateUrl: 'views/user/eceipt-address.html',
        controller: '',
        url:"/eceipt-address.html"
      })
     .state('add-address', {
        templateUrl: 'views/user/add-address.html',
        controller: '',
        url:"/add-address.html"
      })
     .state('add-cart-dialog', {
        templateUrl: 'views/dialog/add-cart-dialog.html',
        controller: '',
        url:"/add-cart-dialog.html"
      })
     .state('modify-avatar-dialog', {
        templateUrl: 'views/dialog/modify-avatar-dialog.html',
        controller: '',
        url:"/modify-avatar-dialog.html"
      })
    .state('product-details', {
        templateUrl: 'views/products/product-details.html',
        controller: '',
        url:"/product-details.html"
      })
    .state('group-purchase-details', {
        templateUrl: 'views/marketing/group/detail.html',
        controller: '',
        url:"/marketing/group/details.html"
      })
    .state('mycollection', {
        templateUrl: 'views/user/mycollection.html',
        controller: '',
        url:"/mycollection.html"
      })
    .state('order', {
        templateUrl: 'views/user/order.html',
        controller: '',
        url:"/order.html"
      })
    .state('group-buying', {
        templateUrl: 'views/marketing/group/list.html',
        controller: '',
        url:"/marketing/group/list.html"
      })
    .state('auction', {
        templateUrl: 'views/index/auction.html',
        controller: '',
        url:"/index/auction.html"
      })
    .state('myintegral', {
        templateUrl: 'views/user/myintegral.html',
        controller: '',
        url:"/user/myintegral.html"
      })
    .state('coupons', {
        templateUrl: 'views/user/coupons.html',
        controller: '',
        url:"/user/coupons.html"
      })
    .state('auction-details', {
        templateUrl: 'views/index/auction-details.html',
        controller: '',
        url:"/auction-details.html"
      })
  });
