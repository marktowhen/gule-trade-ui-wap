'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('BuyController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,GoodsBuyService) {
    	var gid=$stateParams.gid;

        $scope.num =1;
    	GoodsBuyService.condition(gid).success(function(data){
    		$scope.condition = data.body;
            $scope.condition.skuid= "";
    		console.log($scope.condition);
    	});



    	$scope.conditions = [];

    	$scope.toCondition = function(id){
    		var index =  ex($scope.conditions,id);
    		if(index ==-1){
    			$scope.conditions.push(id)
    		}else{
    			$scope.conditions.splice(index,1);
    		}
    			$scope.conditions.sort();
    	
            if($scope.conditions.length>0){
                 GoodsBuyService.sku(gid,$scope.conditions).success(function(data){
                   if(data.code==200 && data.body!=null){
                         $scope.condition.price = data.body.price;
                         $scope.condition.salePrice = data.body.salePrice;
                         $scope.condition.stock = data.body.stock;
                         $scope.condition.volume = data.body.volume;
                         $scope.condition.skuid = data.body.id;
                         $scope.numFlag = true;
                          //$scope.condition.sale = data.body.sale;
                        console.log(  data.body);
                     

                   }else{
                         $scope.condition.skuid ="";
                         $scope.numFlag = false;
                   }
                   
                 });
            }  
    	};




    	var ex = function(arr,id){
    		for (var i = 0; i < arr.length; i++) {
    			if(arr[i]==id){
    				return i;
    			}
    		}
    		return -1;
    	}

        ///减少数量
        $scope.downNum = function(){
            if($scope.num>1){
                 $scope.num = $scope.num - 1;
            }
        }
          ///增加数量
         $scope.upNum = function(){
            if($scope.num <  $scope.condition.stock ){
                 $scope.num = $scope.num + 1;
            }
        }


        
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
            }
          
        }
});

