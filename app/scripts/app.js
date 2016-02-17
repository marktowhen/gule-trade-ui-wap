'use strict';

/**
 * @ngdoc overview
 * @name etradewapApp
 * @description
 * # etradewapApp
 *
 * Main module of the application.
 */
var  jingyunetradewapApp = angular
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url:"/"
      })
    
      .state('about', {
        templateUrl: 'views/about.html',
        url:'/about',
        controller: 'AboutCtrl'
      })
      .state('cart', {
        templateUrl: 'views/cart.html',
        controller: '',
        url:'/cart'
      });
  });
