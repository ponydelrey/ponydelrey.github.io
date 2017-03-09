var BBApp = angular.module('BBApp', ['firebase','ngRoute']);

BBApp.constant("FBMSG", "https://aerialhoop-67936.firebaseapp.com/events");

BBApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/login', {
            templateUrl: 'login.html'
        })
        .when('/register', {
            templateUrl: 'register.html'
        })

});


BBApp.controller('MainController', ['$scope', function ($scope) {

$scope.my = 'Galeria';


}])