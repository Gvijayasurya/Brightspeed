app.controller("HomeCltr", ["$scope", "homeService", function ($scope, homeService) {
    $scope.Uname;
    //Checking for user details in local storage

    (function () {
        if (localStorage.key(0) == null) {
            alert("Login failed!")
            //console.log("the data is not available");
            window.location.href = "#!signin"
        }
        else {
            let lid = window.localStorage.key(0)
            homeService.localData(function (data) {
                for (let i of data) {
                    if (i.id == lid) {
                        $scope.Uname = i.fname
                        break;
                    }
                }
                //console.log(window.localStorage.key(0));
                //console.log("the data is available");
            })

        }
    }())


    //fetching API functionality

    $scope.Itemsarr
    $scope.showData = function () {
        homeService.ApiData(function (data) {
            $scope.val=''
            $scope.Itemsarr = data
        })

    }
    // Filtering Data
    $scope.val;
    $scope.showfilteredItem = function (v){
        if(v=="men"){
            $scope.val="men's clothing"
        }
        else if(v=="wmen"){
            $scope.val="women's clothing"
        }
        else{
            $scope.val=v
        }
    }

    // Sorting Data
    $scope.value;
    $scope.SortItem=function(v){
        $scope.value=v
    }


    let lid = window.localStorage.key(0)
    $scope.clearData = function () {
        window.localStorage.removeItem(lid)
        window.location.href = "#!signin"
    }



}])