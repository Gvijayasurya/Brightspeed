app.controller("SigninCltr",["$scope","SigninService",function($scope,SigninService){
    $scope.Semail;
    $scope.Spass;

    $scope.Comparr;

    $scope.Sdata=function(){
        //console.log($scope.Semail,$scope.Spass);
        SigninService.getUser(function(data){
            //console.log(data);
            $scope.Comparr=data
            let flag = 0
            for(let ele of $scope.Comparr){
                if(ele.email==$scope.Semail && ele.pass==$scope.Spass)
                {
                    //console.log("Login Successfull");
                    window.localStorage.setItem(ele.id,ele.email)
                    alert("Login Successfull")
                    window.location.href="#!home"
                    flag=1
                    break;
                }
            }
            if(flag==0){
                //console.log("Invalid Credentials");
                alert("Invalid Credentials")
            }

        })
        


    }
}])