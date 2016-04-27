'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GoodsListController', 
    function ($scope, $cookies, $stateParams,ConstantService,GoodsListService) {

        //滚动条标志位
        var flag = false;


      /////声明查询用的变量
         $scope.mid=''; //商家id
         $scope.tid=''; //类型id
         $scope.order='0'; //排序
         $scope.name= ''; //商品名
         $scope.pagefrom = 0;
         $scope.pagesize = 10;

         

         ///接受传入的MID
         var letMid  = $stateParams.mid;
         var goodsname = $stateParams.goodsname;
          if(letMid!=null ){
              $scope.mid = letMid;
          }
            if(goodsname!=null ){
              $scope.name = goodsname;
          }



         //声明商品集合
         $scope.goodsList =[];

        /////所有商品查询
    		 GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.pagefrom,$scope.pagesize)
		      .success(function(data){
             for (var i = 0; i <data.body.length; i++) {
                $scope.goodsList.push(data.body[i]);
              }     
             flag=false;
		      });

     

      ////瀑布流追加方法
      var pushContent = function (){
			        GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.goodsList.length,$scope.pagesize)
                .success(function(data){
                   for (var i = 0; i <data.body.length; i++) {
                      $scope.goodsList.push(data.body[i]);
                    }     
                   flag=false;
                });

      };

		  ////瀑布流追加
       $(window).scroll(function(){
          if($scope.goodsList.length < $scope.pagesize){

          }else{
           if (($(window).scrollTop() >= $(document).height()-$(window).height()-80) && !flag ){  //滚动条距离底部不足80px时触发
                pushContent();
                flag = true;
              }
          }
       });


    $scope.byOrder = function (o){  
       	      $scope.order = o;
       	  GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.pagefrom,$scope.pagesize)
          .success(function(data){
            $scope.goodsList=[];
             for (var i = 0; i <data.body.length; i++) {
                $scope.goodsList.push(data.body[i]);
              }     
             flag=false;
          });
       };


  

});

