var BBApp = angular.module('BBApp', ['ngRoute']);

BBApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/login', {
            templateUrl: 'cart.html'
        })

});


BBApp.controller('MainController', ['$scope', function ($scope) {

$scope.my = 'Galeria';


}])
