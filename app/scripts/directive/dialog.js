'use strict';


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

wapApp.directive('addCartSuccessDialog', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                gid:'@'
            },
            templateUrl:'/views/dialog/add-cart-success-dialog.html'
        };
    }
]);