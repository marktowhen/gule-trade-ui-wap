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
         $scope.pagesize = 6;
         //滚动条标志位
        var flag = false;
        $scope.showlist=[];
    	GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.pagefrom,$scope.pagesize)
		      .success(function(data){
         	if(data.code==200){
         		for(var i=0;i<data.body.length;i++){
                    $scope.showlist.push(data.body[i]);
                }
                flag = false;
         	}
          
		});
        //瀑布流的方法
        var falls = function(){
            GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.showlist.length,$scope.pagesize)
                  .success(function(data){
                if(data.code==200){
                    for(var i=0;i<data.body.length;i++){
                    $scope.showlist.push(data.body[i]);
                    }
                    flag = false;
                 }
               
            });
        }
         ////瀑布流追加

        $(window).scroll(function(){
          if($scope.showlist.length < $scope.pagesize){

          }else{
           if (($(window).scrollTop() >= $(document).height()-$(window).height()-70) && !flag ){  //滚动条距离底部不足80px时触发
                falls();
                flag = true;
              }
          }
       });
        IndexService.banner("index",0,4).success(function(data){
            if(data.ok){
                $scope.imgList = data.body;
                /*console.log($scope.imgList.length+"kkkkk");*/
            }
        });
         $scope.groupGoods={};
        GroupBuyService.listWithCondition(0,4).success(function(data){
            if(data.ok){
                for(var i=0;i<data.body.length;i++){
                     $scope.groupGoods=data.body[0];
                }
            }
        });
       /* $scope.flashGoods =[];
        $scope.flash={};
         var size=20;
        FlashSaleService.list(0,size).success(function(data){
            if(data.ok){
                 
                 for(var i=0;i<data.body.length;i++){
                    if(data.body[i].stock>0){
                       $scope.flashGoods.push(data.body[i]);
                    }
                 }
                $scope.flash=$scope.flashGoods[0];

            }
        })

        $scope.godetail = function(id){
        $state.go('one-details',{id:id});
    };*/

});
