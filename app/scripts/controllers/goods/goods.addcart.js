'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('AddCartController',
    function ($scope, $cookies,$state, ConstantService,$stateParams,GoodsBuyService, CartService) {
    	var gid=$stateParams.gid;

    	  $scope.num =1;
    	GoodsBuyService.condition(gid).success(function(data){
    		    $scope.condition = data.body;
            $scope.condition.skuid= "";
    		  for (var i = 0; i < $scope.condition.attrList.length; i++) {
                var attrs = $scope.condition.attrList[i];
              for (var k = 0; k < attrs.valueList.length; k++) {
                     attrs.valueList[k].attrName=attrs.name;
              }
          }
    	});






///////////////////////////////////////选择属性进行sku查询/////////////////////////////////////

/////根据ID删除数组对象
  var delById = function(id){
       for (var i = 0; i < $scope.conditions.length; i++) {
          if($scope.conditions[i].id==id){
            $scope.conditions.splice(i,1);
          }
       }
    };

    //////选中其中一项属性 改变其他属性不选中
      var  ok = function(id,name){
        for (var i = 0; i < $scope.conditions.length; i++) {
              if($scope.conditions[i].name==name && $scope.conditions[i].id!=id){
                            delById($scope.conditions[i].id);
              }
        }
      };


      ///////////////////设定属性 ng-class的方法/////////////////
      var setCurClass = function(){
          for (var j = 0; j < $scope.conditions.length; j++) {
                    var thisId = $scope.conditions[j].id;
                    var thisName = $scope.conditions[j].name;
                  for (var i = 0; i < $scope.condition.attrList.length; i++) {
                       var attrs = $scope.condition.attrList[i];
                        for (var k = 0; k < attrs.valueList.length; k++) {
                          if(thisName==attrs.valueList[k].attrName){
                              if( attrs.valueList[k].id==thisId ){
                                    attrs.valueList[k].attrId = 1;
                                }else{
                                   attrs.valueList[k].attrId = 2;
                                }
                          }
                        }
                  }
          }
      };
    ////////取消 去掉class样式////////////
    var cleanCurClass = function(id,name){
         for (var i = 0; i < $scope.condition.attrList.length; i++) {
                var attrs = $scope.condition.attrList[i];
                if(attrs.name == name){
                      for (var k = 0; k < attrs.valueList.length; k++) {
                            attrs.valueList[k].attrId = 2;
                        }
                }

          }
    }

    //////////////////判断是否在条件数组里////////////////
    var isInArr = function (arr,id){
      for (var i = 0; i < arr.length; i++) {
          if(arr[i].id==id){
            return i;
          }
      }
      return -1;
    }



      ///sku组合条件数组 {'id':,'name':}
    	$scope.conditions = [];
      ////提交查询的属性ID数组
      $scope.toQuery =[];
      //查询
    	$scope.toConditionQuery = function(id,name){
        var index = isInArr( $scope.conditions,id);

        if(index==-1){
             var con = {};
              con.id=id;
              con.name=name;
              $scope.conditions.push(con);
              ok(id,name);
        }else{
           $scope.conditions.splice(index,1);
           cleanCurClass(id,name);
        }


        $scope.toQuery =[];
        for (var i = 0; i < $scope.conditions.length; i++) {
             $scope.toQuery.push($scope.conditions[i].id)
         }
        setCurClass();
        //console.log( ">>:"+$scope.toQuery)

          ///条件进行排序 以便和数据库数据一致
    			$scope.toQuery.sort();
          if($scope.toQuery.length>0){

                 GoodsBuyService.sku(gid,$scope.toQuery).success(function(data){
                   if(data.code==200 && data.body!=null){
                         $scope.condition.price = data.body.price;
                         $scope.condition.salePrice = data.body.salePrice;
                         $scope.condition.stock = data.body.stock;
                         $scope.condition.volume = data.body.volume;
                         $scope.condition.skuid = data.body.id;
                         $scope.condition.sale = data.body.sale;
                         $scope.condition.path = data.body.skuPath;
                         $scope.condition.properties_values = data.body.propertiesValue;
                        /* $scope.numFlag = true;*/

                        console.log($scope.condition);
                   }else{
                         $scope.condition.skuid ="";
                        /* $scope.numFlag = false;*/
                   };

                 });
            };
    	};
      if($scope.num<=1){
        $("span.cd2-left i.icon-jianhao").addClass('bg-gray');
        $("span.cd2-left").addClass('bg-gray');
      }

   ///减少数量
        $scope.downNum = function(){
         
            if($scope.num>1){
                 $scope.num = $scope.num - 1;
            }else{
              $("span.cd2-left i.icon-jianhao").addClass('bg-gray');
              $("span.cd2-left").addClass('bg-gray');
            }
        };
          ///增加数量
       
             $scope.upNum = function(){
                 if( $scope.condition.skuid ==""){
                      alert("请选择属性值");
                  }else{
                    if($scope.num <  $scope.condition.stock ){
                      $scope.num = $scope.num + 1;
                      $("span.cd2-left i.icon-jianhao").removeClass('bg-gray');
                      $("span.cd2-left").removeClass('bg-gray');
                    };
                  }
                
            };
       
        



        ///提交数据
        $scope.next = function(){
            if($scope.condition.skuid!=""){
                  //购买数量
                console.log("购买数量:"+$scope.num);
                  //skuid
                console.log("skuid:"+ $scope.condition.skuid);
            }else{
                alert("请选择一件商品!");
                return;
            };

        };

        $scope.addcart = function(){
        	if($scope.condition.stock == 0){
            	alert("该商品暂时无货。");
            	return;
	        }
	        if(!(Number($scope.num)) || (Number($scope.num) > $scope.condition.stock) ){
	            Dialog.alert($scope, "请输入正确的商品数量。");
	            return;
	        }
	        var goodsincart = {};
	        var goods = $scope.$parent.$parent.goods;
	        goodsincart.gid = goods.gid;
	        goodsincart.skuid = $scope.condition.skuid;
	        goodsincart.gname = goods.name;
	        goodsincart.mid = goods.mid;
	        goodsincart.mname = goods.mName;
	        goodsincart.price = $scope.condition.price;
	        goodsincart.pprice = $scope.condition.salePrice;
	        goodsincart.count = $scope.num;
	        console.log(goodsincart);
	        CartService.addToCart(goodsincart).success(function(response){
	        	if(response.code==200){
	        		alert("添加购物车成功");
	        	}else{
	        		alert(response.message);
	        	}
	        }).error(function(response){
	        	alert("网络异常，稍后重试");
	        });

      };

    });