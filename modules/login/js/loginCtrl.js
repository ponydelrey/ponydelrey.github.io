angular.module('BBApp').controller('loginCtrl', ['FBMSG', '$location','$scope', function (FBMSG, $location, $scope) {

	var ref = new Firebase(FBMSG);


	$scope.signUp = function(){
		var email = $scope.email;
        var password = $scope.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
 
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          

        });

       
        $location.path('/#');
	}

}]);