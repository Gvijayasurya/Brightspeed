app.service("RegisterService",["$http",function($http){

    this.sendUser=function(Ub){
        //console.log(Ub);
        $http({
            method:"POST",
            url:("http://localhost:3000/Users"),
            data:Ub
        })
        .then(function(respons){
            alert("Registration Succesfull!")
            window.location.href="#!signin"
            console.log(respons);
        },function(error){
            alert("Registration Incomplete!")
            //window.location.href="#!"
            console.log(error);
        })
    }
}])