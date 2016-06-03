'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
  wapApp.controller('GroupOverDetailController', 
	function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService,MerchantService,FlashSaleService,$interval,GoodsListService) {
		var groupid= $stateParams.id;
		var userLength = 0;
		$scope.user=[];
		$(".showsuccess").hide();
		$(".showfailed").hide();
		GroupBuyService.singlegroup(groupid).success(function(data){
			if(data.ok){
				$scope.group=data.body;
				if($scope.group.status=="PAID"){
					$(".showsuccess").show();
					$(".showfailed").hide();
				}
				if($scope.group.status=="CLOSED"){
					$(".showsuccess").hide();
					$(".showfailed").show();
					
				}
				
				GroupBuyService.singleUser(groupid,$scope.group.buyers[0].uid).success(function(data1){
					if(data1.ok){
						$scope.singleUser=data1.body;
					}
				})
				userLength=$scope.group.buyers.length;
				$scope.userss=$scope.group.buyers.slice(1,$scope.group.buyers.length);
					if($scope.userss.length>0){
						for(var i=0;i<$scope.userss.length;i++){
							GroupBuyService.singleUser(groupid,$scope.userss[i].uid).success(function(data2){
								if(data2.ok){
									$scope.user.push(data2.body);
								}
							})
						}
						
					}else{
						userLength = 0;
					}
				
				getGroupGood($scope.group.groupGoodsID);
			}
		})
		
		$scope.peopleList=[];
		var peopleone={};
		var getGroupGood = function(groupgoodid){
			GroupBuyService.detail(groupgoodid)
			.success(function(data){
				if(data.ok){
					$scope.groupGoods = data.body;
					if($scope.groupGoods.groupPeople-userLength>0){
						for(var i=$scope.groupGoods.groupPeople-1-userLength;i>0;i--){
								peopleone=i;
								$scope.peopleList.push(peopleone);
						}
					}else{
						$(".showhide").hide();
					}
					
					getGoods($scope.groupGoods.gid);
					goodsSku($scope.groupGoods.skuid);
				}
			}).error(function(data){

			});
		};
		var getGoods = function(gid){
			GoodsDetailsService.detail(gid).success(function(data){
				if(data.ok){
					$scope.goods = data.body;
				};
			});
		};
		var goodsSku = function(skuid){
			FlashSaleService.getsku(skuid).success(function(data){
				if(data.ok){
					$scope.goodSku = data.body;
				};
			});
		}
		$scope.mid=''; //商家id
        $scope.tid=''; //类型id
        $scope.order='0'; //排序
        $scope.name= ''; //商品名
        $scope.pagefrom = 0;
        $scope.pagesize = 3;
		GoodsListService.allGoodsList($scope.mid,$scope.tid,$scope.order,$scope.name,$scope.pagefrom,$scope.pagesize)
		      .success(function(data){
         	if(data.code==200){
         		$scope.showlist = data.body;
         		
         	}
		});
		
	})