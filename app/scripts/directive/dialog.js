'use strict';


wapApp.directive('nowBuyDialog', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/dialog/now-buy-dialog.html',
            scope:{
            	confirmFunction:'&',
                message:'@'
            }
        };
    }
]);

wapApp.directive('addCartDialog', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/dialog/add-cart-dialog.html',
            scope:{
                confirmFunction:'&',
                message:'@'
            }
        };
    }
]);

wapApp.directive('modifyAvatarDialog', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/dialog/modify-avatar-dialog.html',
            scope:{
                confirmFunction:'&',
                message:'@'
            }
        };
    }
]);