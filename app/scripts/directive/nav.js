'use strict';

wapApp.directive('nav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/nav.html'
        };
    }
]);

//my-groups  order_nav
wapApp.directive('ordernav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/marketing/my-groups/ordernav.html'
        };
    }
]);
// auction  order_nav
wapApp.directive('auctionnav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/marketing/my-auctions/auctionnav.html'
        };
    }
]);

// orders  order_nav
wapApp.directive('ordersnav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/orders/history/ordersnav.html'
        };
    }
]);