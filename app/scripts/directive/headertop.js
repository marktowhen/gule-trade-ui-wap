'use strict';

wapApp.directive('headertop', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/headertop.html'
        };
    }
]);