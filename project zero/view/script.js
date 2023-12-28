var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "landing.html",
    })
    .when("/signin", {
        templateUrl : "signin.html",
        controller:"SigninCltr"
    })
    .when("/register", {
        templateUrl : "register.html",
        controller: "RegisterCltr"
    })
    .when("/home",{
        templateUrl:"Home.html",
        controller:"HomeCltr"
    })
});