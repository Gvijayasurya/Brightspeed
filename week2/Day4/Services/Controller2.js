//let app = angular.module("app",[])
app.controller("demoCltr2",["$scope","demoService",function($scope,demoService){
    $scope.value

    $scope.SendData=function(value){
        demoService.recevieData(value)
    }
}])