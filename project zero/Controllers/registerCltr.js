app.controller("RegisterCltr",["$scope","RegisterService",function($scope,RegisterService){
    $scope.fname;
    $scope.lname;
    $scope.mob;
    $scope.email;
    $scope.pass;

    $scope.Rdata=function(){
        let userObj={}
        userObj.fname=$scope.fname
        userObj.lname=$scope.lname
        userObj.mob=$scope.mob
        userObj.email=$scope.email
        userObj.pass=$scope.pass

        //console.log(userObj);
        //console.log("hi");
        RegisterService.sendUser(userObj)
    }

}])