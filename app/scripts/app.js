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
     .state('now-buy-dialog', {
        templateUrl: 'views/dialog/now-buy-dialog.html',
        controller: '',
        url:"/now-buy-dialog.html"
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
    .state('auction-success', {
        templateUrl: 'views/index/auction-success.html',
        controller: '',
        url:"/index/auction-success.html"
      })
    .state('myintegral', {
        templateUrl: 'views/user/myintegral.html',
        controller: '',
        url:"/user/myintegral.html"
      })
    .state('auction-details', {
        templateUrl: 'views/index/auction-details.html',
        controller: '',
        url:"/auction-details.html?id&gid"
      })
    .state('signup', {
        templateUrl: 'views/index/signup.html',
        controller: '',
        url:"/signup.html"
      })
    .state('shareproduct', {
        templateUrl: 'views/user/shareproduct.html',
        controller: '',
        url:"/shareproduct.html"
      })
    .state('problems', {
        templateUrl: 'views/user/problems.html',
        controller: '',
        url:"/problems.html"
      })
    .state('problem1', {
        templateUrl: 'views/user/problem1.html',
        controller: '',
        url:"/problem1.html"
      })
    .state('problem2', {
        templateUrl: 'views/user/problem2.html',
        controller: '',
        url:"/problem2.html"
      })
    .state('problem3', {
        templateUrl: 'views/user/problem3.html',
        controller: '',
        url:"/problem3.html"
      })
    .state('problem4', {
        templateUrl: 'views/user/problem4.html',
        controller: '',
        url:"/problem4.html"
      })
    .state('problem5', {
        templateUrl: 'views/user/problem5.html',
        controller: '',
        url:"/problem5.html"
      })
    .state('problem6', {
        templateUrl: 'views/user/problem6.html',
        controller: '',
        url:"/problem6.html"
      })
    .state('partner', {
        templateUrl: 'views/user/partner.html',
        controller: '',
        url:"/partner.html"
      })
    .state('customer-service', {
        templateUrl: 'views/user/customer-service.html',
        controller: '',
        url:"/customer-service.html"
      })
    .state('login', {
        templateUrl: 'views/user/login.html',
        controller: '',
        url:"/login.html"
      })
    .state('blank', {
        templateUrl: 'views/products/blank.html',
        controller: '',
        url:"/blank.html"
      })
    .state('news', {
        templateUrl: 'views/user/news.html',
        controller: '',
        url:"/news.html"
    })
    .state('news1', {
        templateUrl: 'views/user/news1.html',
        controller: '',
        url:"/news1.html"
    })
    .state('user-set', {
        templateUrl: 'views/user/user-set.html',
        controller: '',
        url:"/user-set.html"
    })
    .state('pay-success', {
        templateUrl: 'views/products/pay-success.html',
        controller: '',
        url:"/pay-success.html"
    })
    .state('joined-group', {
        templateUrl: 'views/index/joined-group.html',
        controller: '',
        url:"/joined-group.html"
    })
    .state('joined-rankgroup', {
    	templateUrl: 'views/marketing/rankgroup/joined-rankgroup.html',
    	controller: 'RankGroupJoinController',
    	url:"/joined-rankgroup.html"
    })
    .state('one-list', {
        templateUrl: 'views/index/one-list.html',
        controller: '',
        url:"/one-list.html"
    })
    .state('one-details', {
        templateUrl: 'views/index/one-details.html',
        controller: '',
        url:"/one-details.html?id"
    })
    .state('rankgroup', {
    	  templateUrl: 'views/marketing/rankgroup/list.html',
    	  controller: '',
    	  url:"/marketing/rankgroup/list.html"
      })
     .state('rankgroup-details', {
        templateUrl: 'views/marketing/rankgroup/detail.html',
        controller: '',
        url:"/marketing/rankgroup/details.html?ggid&gid&group_id"
      })
  });
