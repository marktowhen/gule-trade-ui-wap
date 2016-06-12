'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('JoinGroupController', 
	function ($scope, $state,GroupBuyService, $stateParams,GoodsDetailsService,MerchantService,FlashSaleService,$interval,GoodsListService) {
		//团购商品$stateParams.groupid="表示从付款成功时跳转到这个页面是传过来的团的id(在付款成功的页面通过oid查group_order表，查出对应的groupid来)"
		//邀请好友时也跳转这个页面啊穿过一个groupid
		var groupid = $stateParams.groupid//团购商品的团的id值
		//进来的用户的id   uid(关注了但是没有加入该团)
        var uid="Ma9ogkIXSW-y0uSrvfqVIQ";
        var userLength = 0;
		$scope.user=[];
		GroupBuyService.singlegroup(groupid).success(function(data){
			if(data.ok){
				$scope.group=data.body;
				console.log("ppp"+$scope.group.groupGoodsID)
				getGroupGood($scope.group.groupGoodsID);
				GroupBuyService.singleUser(groupid,$scope.group.buyers[0].uid).success(function(data1){
					if(data1.ok){
						$scope.singleUser=data1.body;
					}
				})

				userLength=$scope.group.buyers.length;
				$scope.userss=$scope.group.buyers.slice(1,$scope.group.buyers.length);
				for(var i=0;i<$scope.userss.length;i++){
					GroupBuyService.singleUser(groupid,$scope.userss[i].uid).success(function(data2){
						if(data2.ok){
							$scope.user.push(data2.body);
							console.log($scope.user);
						}
					})
				}
			};
		});
		$scope.peopleList=[];
		var peopleone={};
		$scope.peopleCount=0;
		var getGroupGood = function(groupgoodid){
			GroupBuyService.detail(groupgoodid)
			.success(function(data){
				if(data.ok){
					if($scope.groupGoods.groupPeople-userLength>0){
						for(var i=$scope.groupGoods.groupPeople-1-userLength;i>0;i--){
								peopleone=i;
								$scope.peopleList.push(peopleone);
						}
					}else{
						$(".showhide").hide();
					}
					$scope.groupGoods = data.body;
					getGoods($scope.groupGoods.gid);
					goodsSku($scope.groupGoods.skuid);
					TimeDown($scope.groupGoods);
				}
			}).error(function(data){

			});
		};
		var TimePromise;
		var TimeDown = function(groupGoods){
			$scope.duration=groupGoods.duration;
			var oft=Math.round(($scope.duration)/1000);
			if(oft<=0){
					groupGoods.time="00:00:00:00"
					return TimePromise;
			}
			TimePromise = $interval(function(){

				var oft=Math.round(parseInt($scope.duration--));
				if(oft>0){
					var ofd=parseInt(oft/3600/24);
					var ofh=parseInt((oft%(3600*24))/3600);
					var ofm=parseInt((oft%3600)/60);
					var ofs=oft%60;
					groupGoods.time=(ofd+' : ' +ofh+ ' : ' +ofm+ ' : ' +ofs);
				}

			},1000);

			return TimePromise;
			
		}
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

		var isEmpty = function(str){
			if(str==null || str==undefined || str==''){
				return true;
			}
			return false;
		}
		if(!isEmpty(groupid)){

			//查询参团数量
			GroupBuyService.countUser(groupid, '').success(function(data){
				$scope.showGroup = true;
				$scope.count = data.body;
			})
		}

		/*如果uid不存在的时候我们就将差几人的按钮换成参团按钮
		如果该用户已经参团的情况下按钮显示差几个人的团
		*/
		/*GroupBuyService.singleUser(groupid,uid).success(function(data3){
			if(data3.ok){
				if(data3.body==null || data3.body==""){
					groupGoods.Btnvalue="加入该团";
					
						$scope.join = function(){
							var car  = creatCar($scope.groupGoods, $scope.goods);
							GroupBuyService.join(groupid,car)
							.success(function(data){
								if(data.ok){
									$state.go('orderconfirm.page');
								}else{
									alert(data.message);
								}
							})
						}
				}else{
					groupGoods.Btnvalue="还差parseInt($scope.count)人参团"
				}
			}
		})*/
		
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
         		console.log($scope.showlist)
         	}
		});

	})