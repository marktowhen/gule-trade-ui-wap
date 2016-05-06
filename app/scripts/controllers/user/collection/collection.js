'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('CollectionController', 
    function ($scope, $cookies,$state, ConstantService,$stateParams,CollectionService,GoodsDetailsService) {

    	CollectionService.list().success(function(data){
			if(data.code==200){
				$scope.favList = data.body;
				//console.log($scope.favList)
			}

		});


		

		$scope.cleanCollection = function(id){
				GoodsDetailsService.delfav(id).success(function(data){
					 if(data.code==200){
						// alert("删除收藏");
						    	CollectionService.list().success(function(data){
										if(data.code==200){
											$scope.favList = data.body;
											//console.log($scope.favList)
										}

								});

					}
				});
		}
});

