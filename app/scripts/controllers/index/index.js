'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('IndexController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,IndexService,GoodsListService,GroupBuyService,FlashSaleService) {

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
         	}
		});
        IndexService.banner("index",0,4).success(function(data){
            if(data.ok){
                $scope.imgList = data.body;
            }
        });
         $scope.groupGoods={};
        GroupBuyService.listWithCondition(0,1).success(function(data){
            if(data.ok){
                for(var i=0;i<data.body.length;i++){
                     $scope.groupGoods=data.body[0];
                }
            }
        });
        $scope.flashGoods =[];
        $scope.flash={};
         var size=20;
        FlashSaleService.list(0,size).success(function(data){
            if(data.ok){
                 
                 for(var i=0;i<data.body.length;i++){
                    if(new Date(data.body[i].activityTime)<= new Date() && data.body[i].stock>0){
                       $scope.flashGoods.push(data.body[i]);
                    }
                 }
                $scope.flash=$scope.flashGoods[0];
                console.log("ppppp"+$scope.flash);

            }
        })

        $scope.godetail = function(id){
        $state.go('one-details',{id:id});
    };

});
