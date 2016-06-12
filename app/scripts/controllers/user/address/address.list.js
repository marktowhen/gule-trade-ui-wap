'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('OrderAddressListController',
    function ($scope,$stateParams, $cookies, ConstantService, OrderService, $state,
        MyReceiveAddressService, CashCouponService, DiscountCouponService, CouponService, PostageService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);

    MyReceiveAddressService.listAll()
        .success(function(data){
            $scope.addresses = data.body;
        });
    //设置默认
    $scope.defaulted = function(address){
        if(address.defaulted) return;

        address.defaulted = 'true';
        var id = address.id;
        if(id!='' && id!=undefined && id!=null){
            MyReceiveAddressService.setDefault(id).success(function(data){
                if(data.code==200){
                    angular.forEach($scope.addresses, function(addr){
                        addr.defaulted = false;
                    });
                    address.defaulted = true;
                }else{
                    alert(data.message);
                }
            })
        }
    };

    $scope.select = function(address){
    	if($stateParams.key=="auction"){
    		if($scope.transaction && $scope.transaction.orders && $scope.transaction.orders.length > 0){
    			$scope.transaction.addressid = address.id;
    			$scope.transaction.city = address.city;
    			$scope.transaction.address = address.countryName+'-'+address.provinceName+'-'+address.cityName+'-'+address.address;
    			$scope.transaction.receiver = address.receiver;
    			$scope.transaction.mobile = address.mobile;
    			$scope.transaction.zipcode = address.zipcode;
    			$scope.transaction.countryName = address.countryName;
    			$scope.transaction.provinceName = address.provinceName;
    			$scope.transaction.cityName = address.cityName;
    			$scope.selectAddress(address);
    			$state.go("auction-signup");
    		}
    	}else{
    		if($scope.transaction && $scope.transaction.orders && $scope.transaction.orders.length > 0){
    			$scope.transaction.addressid = address.id;
    			$scope.transaction.city = address.city;
    			$scope.transaction.address = address.countryName+'-'+address.provinceName+'-'+address.cityName+'-'+address.address;
    			$scope.transaction.receiver = address.receiver;
    			$scope.transaction.mobile = address.mobile;
    			$scope.transaction.zipcode = address.zipcode;
    			$scope.transaction.countryName = address.countryName;
    			$scope.transaction.provinceName = address.provinceName;
    			$scope.transaction.cityName = address.cityName;
    			$scope.selectAddress(address);
    			
    			$state.go("orderconfirm.page");
    			
    		}
    	}
    };

    $scope.deleteaddr = function(address){
        MyReceiveAddressService.remove(address.id)
            .success(function(data){
                if(data.ok){
                    $scope.addresses.splice($scope.addresses.indexOf(address), 1);
                }else{
                    alert(data.message);
                }
            });
    };

    $scope.editaddr = function(address){
      if($scope.transaction && $scope.transaction.orders && $scope.transaction.orders.length > 0){
        $state.go("orderconfirm.address.edit", {'id':address.id});
      }else {
        $state.go("address.edit", {'id':address.id});
      }
    };

});
