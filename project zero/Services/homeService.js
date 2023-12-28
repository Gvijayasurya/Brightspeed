app.service("homeService", ["$http", function ($http) {
    this.localData = function (cb) {
        $http({
            method: "GET",
            url: ("http://localhost:3000/Users"),
        })
            .then(function (respons) {
                cb(respons.data)
            }, function (error) {
                console.log(error);
            })

    }
    this.ApiData=function(cb){
        $http({
            method:"GET",
            url:("https://fakestoreapi.com/products"),
        })
        .then(function(respons){cb(respons.data)})
        .then(function(e){console.log(e);})
    }

}])
