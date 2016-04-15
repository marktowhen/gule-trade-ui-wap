'use strict';

wapApp.directive('nav', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/nav.html'
        };
    }
]);