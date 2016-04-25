'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GoodsListController', 
    function ($scope, $cookies, ConstantService,GoodsListService) {

        var mid=''; //商家id
        var tid=''; //类型id
        var order='0'; //排序
         var name= ''; //商品名
         var pagefrom = 0;
         var  pagesize = 5;

        var querGoods = function(mid,tid,order,name,pagefrom,pagesize){
        		 GoodsListService.allGoodsList(mid,tid,order,name,pagefrom,pagesize)
				      .success(function(data){
				      	 $scope.goodsList  = data.body;
				      	// console.log($scope.goodsList);
				      });
        };

        querGoods(mid,tid,order,name,pagefrom,pagesize);

       //////////默认查询所有商品
     

      ////瀑布流追加方法
      var pushContent = function (){
	         pagesize = pagesize + 5;
			 querGoods(mid,tid,order,name,pagefrom,pagesize);
      };
		////瀑布流追加
       $(window).scroll(function(){
         if($(window).scrollTop()>=$(document).height()-$(window).height()-80){  //滚动条距离底部不足80px时触发
          //pushContent();
        }
    });


       $scope.byOrder = function (o){
       	      order = o;
       	     querGoods(mid,tid,order,name,pagefrom,pagesize);
       }
});

