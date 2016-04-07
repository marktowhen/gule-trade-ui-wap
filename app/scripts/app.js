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
        templateUrl: 'views/index_app.html',
        controller: 'MainCtrl',
        url:"/"
      })
    .state('products', {
        templateUrl: 'views/products.html',
        controller: 'MainCtrl',
        url:"/"
      })
    .state('shoppingcart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'MainCtrl',
        url:"/"
      })
    .state('no-payment', {
        templateUrl: 'views/no-payment/no-payment.html',
        controller: 'MainCtrl',
        url:"/"
      })
  });
