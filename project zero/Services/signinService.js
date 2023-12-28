app.service("SigninService", ["$http", function ($http) {

    this.getUser = function (cb) {
        $http({
            method: "GET",
            url: ("http://localhost:3000/Users"),
        })
            .then(function (respons) {
                //console.log(respons.data);
                cb(respons.data)

            }, function (e) {
                console.log(e);
            })
    }

}])