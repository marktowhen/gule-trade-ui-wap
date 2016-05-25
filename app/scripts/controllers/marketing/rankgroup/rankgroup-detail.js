'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('RankGroupDetailController', 
		 function ($scope, $state,RankGroupService, $stateParams,GoodsDetailsService,MerchantService) {
	
		//团购商品
	RankGroupService.detail($stateParams.ggid)
			.success(function(data){
				if(data.ok){
					$scope.groupGoods = data.body;
					$scope.groupGoods.groupID= data.body.groupID;
					$scope.groupID=$scope.groupGoods.groupID;
					$scope.deposit=$scope.groupGoods.deposit;
					$scope.groupGoods.currentPrice = data.body.priceSettings[0];
					
					/*团购详情*/
					if(!isEmpty($scope.groupID)){
						$scope.showGroup = true;
						//查询参团数量
						RankGroupService.joinDetail($scope.groupID)
						.success(function(data){
							if(data.ok){
								$scope.group = data.body;
								$scope.start=$scope.group.start; // 团开始时间
								$scope.count=$scope.group.buyers.length; // 参团人数
								$scope.leader=$scope.group.leader; // 团长
								runTiming();
							}
						}).error(function(data){

						});
					}
					/*团购详情  结束*/
				}
			}).error(function(data){

			});
		//商品本身
		GoodsDetailsService.detail($stateParams.gid)
		.success(function(data2){
				$scope.goods = data2.body;
				$scope.goodId = $stateParams.gid;
		setTimeout(function(){var swiper = new Swiper('#product_swiper_container', {
		        slidesPerView: 1,
		        slidesPerColumn: 1,
		        autoplay:5000,
		        loop:true,
		        pagination: '.swiper-pagination',
				paginationClickable :true,
		    });},200)

		})
		

		//店铺
		$scope.groupID = $scope.groupID;
		var isEmpty = function(str){
			if(str==null || str==undefined || str==''){
				return true;
			}
			return false;
		}
		if(!isEmpty($scope.groupID)){
           
			//查询参团数量
			RankGroupService.countUser($scope.groupID, 'PAID').success(function(data){
				$scope.showGroup = true;
				$scope.count = data.body;
			})
		}

		$scope.join = function(){
			//到这里
			if ($scope.groupID) {
				var car  = creatCar($scope.groupGoods, $scope.goods,$scope.groupGoods.currentPrice.price);
				RankGroupService.join($scope.groupID,car)
				.success(function(data){
					if(data.ok){
						$state.go('orderconfirm.page');
					}else{
						alert(data.message);
					}
				})
			}
			
		}
		
		//跳转到参团成功详情页 。。。。。。
		$scope.joinDetails = function(){
			$state.go('joined-rankgroup');
						
			
			
		}
		//跳转到参团成功详情页 。。。。。。
		$scope.toCart = function(){
			$state.go('product-details',{cart:1});
			
			
		}

		$scope.start = function(){
			RankGroupService.start($scope.groupGoods.id,creatCar($scope.groupGoods, $scope.goods,$scope.groupGoods.currentPrice.price))
				.success(function(data){
					if(data.ok){
						$state.go('orderconfirm.page');
					}else{
						alert(data.message);
					}
				});
		}

		$scope.buyit = function(){
			
		}

		var creatCar = function(groupGoods, goods, price){
	    	var goodsInCar = [{'gid':goods.gid,'skuid':groupGoods.skuid,'gname':goods.name,'mid':goods.mid,'mname':goods.mName,'price':price,'count':1}];
	    	
	    	var orderInCar = [{'mid':goods.mid,'mname':goods.mName,'postage':0,'type':'GROUP','goods':goodsInCar}];
	    	return {'orders':orderInCar};
    	}

		// $scope.getInfo = function(id){
		// 	GoodsDetailsService.info(gid).success(function(data){
		// 		$scope.infos = data.body;
		// 		//console.log($scope.infos);
		// 	});
		// };
		/////进入店铺
		$scope.toMerchant = function (mid){
			$state.go('products',{mid:mid});	
		};
		/////收藏
		$scope.fav = function (gid){
			GoodsDetailsService.fav(gid);
		}

		///购物车
		/*$scope.toCart  = function(){
			alert("ddd")
			$state.go('product-details',{cart:1});
		}*/
});