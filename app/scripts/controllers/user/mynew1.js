'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 wapApp.controller('NewsController',function ($scope,MyNewService,$stateParams) {
 	var id=$stateParams.id;
 	MyNewService.getSingleMessage(id).success(function(data){
 		if(data.ok){
 			$scope.message=data.body;
 			MyNewService.updatestatus($scope.message.id).success(function(data){
				if(data.ok){
					
				}
			})
 		}
 	})

 	
 })