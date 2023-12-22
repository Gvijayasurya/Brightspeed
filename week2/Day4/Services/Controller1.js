let app = angular.module("app",[])
app.controller("DemoCltr1",["$scope","demoService",function($scope,demoService){
    $scope.arr


    $scope.data = function(){
        $scope.arr=demoService.getData()
    }

    

}])