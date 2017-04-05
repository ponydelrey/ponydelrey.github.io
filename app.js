var BBApp = angular.module('BBApp', ['firebase','ngRoute', 'ui.bootstrap']);

BBApp.constant("FBMSG", "https://aerialhoop-67936.firebaseio.com");

BBApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'modules/login/views/login.html',
            controller: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'modules/register/views/register.html',
            controller: 'registerCtrl'
        })
        .when('/classes', {
            templateUrl: 'modules/classes/views/class.html',
            controller: 'classCtrl'
        })
           .when('/gallery', {
            templateUrl: 'modules/gallery/views/gallery.html',
            controller: 'galleryCtrl'
        })
        .otherwise({redirectTo : '/'})

});


BBApp.controller('MainController', ['$scope', '$rootScope',  '$location', function ($scope, $rootScope, $location) {
	
	
    $scope.user = {};
    $scope.showSignPanel = true;
   


      $scope.$on('$routeChangeStart', function(angularEvent, newUrl) {

            if (1) {
                // User isn’t authenticated
            }

        });

	    $scope.logout = function(){
    	if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        $scope.user.userName = "";
        console.log('user and scope user:', $scope.userName);
        $scope.showSignPanel = true;
        $scope.hideSignPanel = false;
         $location.path('/#');
    	}
    }
	

	console.log('were in  controller', $scope.hideSignPanel, $scope.showSignPanel);


    firebase.auth().onAuthStateChanged(function(user) {
    	if(user){
    		console.log('changed state');
    		$scope.user = user;
    		$scope.user.userName = user.email;
    		console.log('user and scope user:', user, $scope.userName);
    		$scope.showSignPanel = false;
    		$scope.hideSignPanel = true;
            $scope.$apply();

    	}
	$scope.check = function (password) {
    console.log(password);
}
});

$scope.my = 'Galeria';


}])