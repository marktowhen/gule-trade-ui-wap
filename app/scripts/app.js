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
        templateUrl: 'views/marketing/auction/auction.html',
        controller: '',
        url:"/index/auction.html"
      })
     .state('auction-hall', {
        templateUrl: 'views/marketing/auction/auction-hall.html',
        controller: '',
        url:"/auction-hall.html?id&gid"
      })
    .state('auction-success', {
        templateUrl: 'views/marketing/auction/auction-success.html',
        controller: '',
        url:"/index/auction-success.html"
      })
    .state('myintegral', {
        templateUrl: 'views/user/myintegral.html',
        controller: '',
        url:"/user/myintegral.html"
      })
    .state('auction-details', {
        templateUrl: 'views/marketing/auction/auction-details.html',
        controller: '',
        url:"/auction-details.html?id&gid&key"
      })
    .state('auction-signup', {
          templateUrl: 'views/marketing/auction/signup.html',
          controller: '',
          url:"/auction-signup.html?id&gid"
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
        url:"/news1.html?id"
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
        url:"/joined-group.html?groupid"
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
    .state('confirm-receipt', {
        templateUrl: 'views/orders/confirm-receipt.html',
        controller: '',
        url:"/confirm-receipt.html?id"
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
     .state('my-groups-parent', {
        templateUrl: 'views/marketing/my-groups/my-groups-parent.html',
        controller: '',
        url:"/my-groups-parent.html"
      })
     .state('my-groups-all', {
        templateUrl: 'views/marketing/my-groups/my-groups-all.html',
        controller: '',
        url:"/my-groups-all.html"
      })
     .state('my-groups-ing', {
        templateUrl: 'views/marketing/my-groups/my-groups-ing.html',
        controller: '',
        url:"/my-groups-ing.html"
      })
     .state('my-groups-success', {
        templateUrl: 'views/marketing/my-groups/my-groups-success.html',
        controller: '',
        url:"/my-groups-success.html"
      })
     .state('my-groups-failed', {
        templateUrl: 'views/marketing/my-groups/my-groups-failed.html',
        controller: '',
        url:"/my-groups-failed.html"
      })
     .state('my-auctions', {
        templateUrl: 'views/marketing/my-auctions/my-auctions.html',
        controller: '',
        url:"/my-auctions.html"
      })
     .state('auction-record', {
        templateUrl: 'views/marketing/my-auctions/auction-record.html',
        controller: '',
        url:"/auction-record.html"
      })
     .state('auction-over', {
        templateUrl: 'views/marketing/my-auctions/auction-over.html',
        controller: '',
        url:"/auction-over.html"
      })
     .state('auction-topay', {
        templateUrl: 'views/marketing/my-auctions/auction-topay.html',
        controller: '',
        url:"/auction-topay.html"
      })
     .state('auction-bond', {
        templateUrl: 'views/marketing/my-auctions/auction-bond.html',
        controller: '',
        url:"/auction-bond.html"
      })
     .state('view-details', {
        templateUrl: 'views/marketing/my-auctions/view-details.html',
        controller: '',
        url:"/view-details.html"
      })
     .state('order-details', {
        templateUrl: 'views/orders/order-details.html',
        controller: '',
        url:"/order-details.html?id"
      })
     .state('search', {
        templateUrl: 'views/index/search.html',
        controller: '',
        url:"/search.html"
      })
     .state('group-over-details', {
        templateUrl: 'views/marketing/my-groups/group-over-details.html',
        controller: '',
        url:"/group-over-details.html?id"
      })
     .state('order-history-all', {
          templateUrl: 'views/orders/history/order-history-all.html',
          controller:  '',
          url:"/order-history-all.html"
      })
      .state('order-history-topay', {
          templateUrl: 'views/orders/history/order-history-topay.html',
          controller:  '',
          url:"/order-history-topay.html"
      })
       .state('order-history-paid', {
          templateUrl: 'views/orders/history/order-history-paid.html',
          controller:  '',
          url:"/order-history-paid.html"
      })
       .state('order-history-delivered', {
          templateUrl: 'views/orders/history/order-history-delivered.html',
          controller:  '',
          url:"/order-history-delivered.html"
      })
  });
