'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('GoodsDetailsController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,GoodsDetailsService) {
    	var gid=$stateParams.gid;
    	////收藏id
    	$scope.fav_id = "";

		///////////查询详细信息
		GoodsDetailsService.detail(gid).success(function(data){
			$scope.goods = data.body;
			//console.log($scope.goods);
		});
		////////判断此商品的收藏状态
		GoodsDetailsService.isfav(gid).success(function(data){
			if(data.code==200){
				$scope.fav_id = data.body;
			
	
			}
		});

		///查询info展示
		$scope.getInfo = function(id){
			GoodsDetailsService.info(gid).success(function(data){
				$scope.infos = data.body;
			//console.log($scope.infos);
			});
		};
		/////进入店铺
		$scope.toMerchant = function (mid){
			$state.go('products',{mid:mid});	
		};

		/////收藏
		$scope.fav = function (gid){
			////判断有没有收藏ID 有时保存  没有时删除
			if($scope.fav_id==""){
						GoodsDetailsService.fav(gid).success(function(data){
							   if(data.code==200){
									alert("收藏成功!");
									$scope.fav_id = data.body;
								}else{
									alert("您还未登录!")
								}
							});
			}else{
				GoodsDetailsService.delfav($scope.fav_id).success(function(data){
					 if(data.code==200){
						 alert("删除收藏")
					     $scope.fav_id = "";
					}
					
				});
				
			}

			
		}

});
