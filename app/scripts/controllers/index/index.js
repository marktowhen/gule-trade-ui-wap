'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('IndexController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,IndexService,GoodsListService) {

    	 $scope.mid=''; //商家id
         $scope.tid=''; //类型id
         $scope.order='0'; //排序
         $scope.name= ''; //商品名
         $scope.pagefrom = 0;
         $scope.pagesize = 4;


    	GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.pagefrom,$scope.pagesize)
		      .success(function(data){
         	if(data.code==200){
         		$scope.showlist = data.body;
         		console.log($scope.showlist)
         	}
		});
        IndexService.banner("index",0,4).success(function(data){
            if(data.ok){
                $scope.imgList = data.body;
            }
        })

});
