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
        url:"/"
      })
    .state('index_app', {
        templateUrl: 'views/index/index_app.html',
        controller: '',
        url:"/index_app.html"
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
    .state('group-purchase-details', {
        templateUrl: 'views/marketing/group/detail.html',
        controller: '',
        url:"/marketing/group/details.html?ggid&gid&group_id"
      })
    .state('mycollection', {
        templateUrl: 'views/user/mycollection.html',
        controller: '',
        url:"/mycollection.html"
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
    .state('shareproduct', {
        templateUrl: 'views/user/shareproduct.html',
        controller: '',
        url:"/shareproduct.html"
      })
    .state('partner-help', {
        templateUrl: 'views/user/partner-help.html',
        controller: '',
        url:"/partner-help.html"
      })
    .state('partner', {
        templateUrl: 'views/user/partner.html',
        controller: '',
        url:"/partner.html"
      })
    .state('erweima', {
        templateUrl: 'views/user/erweima.html',
        controller: '',
        url:"/erweima.html"
      })
    .state('login', {
        templateUrl: 'views/user/login.html',
        controller: '',
        url:"/login.html"
      })
  });
