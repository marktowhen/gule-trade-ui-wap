'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.controller('OrderAddressNewController',
    function ($scope, $cookies, ConstantService, $state, $stateParams,
        MyReceiveAddressService, AreaService) {
    var uid = $cookies.get(ConstantService.LOGIN_ID_KEY);
    var addrid = $stateParams.id;

    if(addrid){
        MyReceiveAddressService.single(addrid).success(function(data){
            if(data.ok){
                $scope.address = data.body;
                $scope.getProvince();
                $scope.getCity();
            }else{
                alert(data.message);
            }
        });
    }else{
        $scope.address = {};
    }



    AreaService.listCountry()
        .success(function(data){
            if(data.code==200){
                $scope.countries = data.body;
            }

        });
    //获取省
    $scope.getProvince = function(){
        $scope.cities = '';
        $scope.provinces =  '';
        var countryID = $scope.address.country;
        if(countryID!=null && countryID!=''){
            AreaService.listProvince(countryID)
            .success(function(data){
                if(data.ok){
                    $scope.provinces = data.body;
                }

            });
        }

    };

    //获取城市
    $scope.getCity = function(){
        $scope.cities = '';
        var provinceID = $scope.address.province;
        if(provinceID!=null && provinceID!=''){
            AreaService.listCity(provinceID)
            .success(function(data){
                if(data.ok){
                    $scope.cities = data.body;
                }

            });
        }

    };

    $scope.setdefault = function(){
        $scope.address.defaulted = !$scope.address.defaulted;
    };

    $scope.submit = function(){
       /* if(valid){*/
            if($scope.address.id==null || $scope.address.id==''){
                //add
                MyReceiveAddressService.add($scope.address).success(function(data){
                    if(data.ok){
                      if($scope.transaction && $scope.transaction.orders && $scope.transaction.orders.length > 0){
                        $state.go("orderconfirm.address.list");
                      }else {
                        $state.go("address.list");
                      }
                    }else{
                        alert(data.message);
                    }
                })

            }else{
                MyReceiveAddressService.refresh($scope.address).success(function(data){
                    if(data.ok){
                      if($scope.transaction && $scope.transaction.orders && $scope.transaction.orders.length > 0){
                        $state.go("orderconfirm.address.list");
                      }else {
                        $state.go("address.list");
                      }
                    }else{
                        alert(data.message);
                    }
                })
            }
       /* }*/
    };

});
