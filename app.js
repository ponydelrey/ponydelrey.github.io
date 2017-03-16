var BBApp = angular.module('BBApp', ['firebase','ngRoute']);

BBApp.constant("FBMSG", "https://aerialhoop-67936.firebaseio.com");

BBApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainController',
            controllerAs: 'main'
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


BBApp.controller('MainController', ['$scope', function ($scope, Service) {
	var self = this;
	self.Service = Service;
	self.user = {};

	    self.logout = function(){
    	if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        console.log('logout');
        $route.reload();
    	}
    }
	

	console.log('were in controller', $scope.hideSignPanel, $scope.showSignPanel);


firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		console.log('changed state');
		self.user = user;
		self.user.userName = user.email;
		console.log('user:', user, $scope.userName);
		self.showSignPanel = false;
		self.hideSignPanel = true;

	}else{
	console.log('fixed to true');
	self.showSignPanel = true;
	}
	self.check = function (password) {
    console.log(password);
}
});

self.my = 'Galeria';


}])