angular.module('BBApp').controller('registerCtrl', ['FBMSG', '$location', '$rootScope', '$scope', function (FBMSG, $location, $rootScope, $scope) {

  $rootScope.user;
	var ref = new Firebase(FBMSG);
console.log('r');
	$scope.handleSignUp = function()  {
        var email = $scope.email;
        var password = $scope.password;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

}]);