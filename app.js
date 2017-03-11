var BBApp = angular.module('BBApp', ['firebase','ngRoute']);

BBApp.constant("FBMSG", "https://aerialhoop-67936.firebaseio.com");

BBApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/login', {
            templateUrl: 'modules/login/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'register.html'
        })

});


BBApp.controller('MainController', ['$scope', function ($scope) {

$scope.my = 'Galeria';


}])