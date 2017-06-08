var BBApp = angular.module('BBApp', ['firebase','ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial']);

BBApp.constant("FBMSG", "https://aerialhoop-67936.firebaseio.com");
BBApp.constant('moment', moment);


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
        .when('/wear', {
            templateUrl: 'modules/wear/views/wear.html',
            controller: 'wearCtrl'
        })
         .when('/post', {
            templateUrl: 'modules/news/views/post.html',
            controller: 'postCtrl'
        })
        .when('/ae', {
            templateUrl: 'modules/news/views/ae.html',
            controller: ''
        })
        .when('/manage', {
            templateUrl: 'modules/manage/views/manage.html',
            controller: 'manageCtrl'
        })
        .otherwise({redirectTo : '/'})

});


BBApp.controller('MainController', ['$scope', '$rootScope',  '$location', '$http', function ($scope, $rootScope, $location, $http) {
	
	
    $scope.user = {};
    $scope.showSignPanel = true;
    $scope.more = true;
    $scope.sup = false;
   


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
        var ref = firebase.database();
        //console.log('database .',ref);
        $scope.showSignPanel = true;
        $scope.hideSignPanel = false;
         $location.path('/#');
    	}
    }

    firebase.auth().onAuthStateChanged(function(user) {
    	if(user){
    		console.log('changed state');
    		$scope.user = user;
    		$scope.user.userName = user.email;

            if (user.email === 'ann@gmail.com'){
                $scope.admin = true;
                console.log('welcome, admin');
            }else {
                $scope.admin = false;
            }

        	$scope.showSignPanel = false;
    		$scope.hideSignPanel = true;
            $scope.$apply();

    	}
	$scope.check = function (password) {
}

$scope.more = function(){
 $scope.more = !$scope.more;
 $scope.sup = !$scope.sup;
}
});

$scope.my = "Galeria"


}])



