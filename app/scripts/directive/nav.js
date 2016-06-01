'use strict';

wapApp.directive('nav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/nav.html'
        };
    }
]);

// order_nav
wapApp.directive('ordernav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/marketing/my-groups/ordernav.html'
        };
    }
]);