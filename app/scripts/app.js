'use strict';

/**
 * @ngdoc overview
 * @name etradewapApp
 * @description
 * # etradewapApp
 *
 * Main module of the application.
 */
angular
  .module('etradewapApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url:"/"
      })
    .state('about', {
        templateUrl: 'views/about.html',
        url:'/about',
        controller: 'AboutCtrl'
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
        templateUrl: 'views/shoppingcart/shoppingcart.html',
        controller: '',
        url:"/shoppingcart.html"
      })
    .state('no-payment', {
        templateUrl: 'views/no-payment/no-payment.html',
        controller: '',
        url:"/no-payment.html"
      })
  });
