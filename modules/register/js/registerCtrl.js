angular.module('BBApp').controller('registerCtrl', ['FBMSG', '$location', '$rootScope', '$scope', function (FBMSG, $location, $rootScope, $scope) {

  $rootScope.user;
	var ref = new Firebase(FBMSG);


	$scope.handleSignUp = function()  {
        var email = $scope.email;
        var password = $scope.password;
        var passConfirm = $scope.passwordconfirm;
      if (email.length < 4) {
        alert('Proszę wprowadzić poprawny adres e-mail.');
        return;
      }
      if (password.length < 4) {
        alert('Hasło musi mieć więcej niż 4 znaki.');
        return;
      }
      if( password != passConfirm){
        alert("Hasła nie zgadzają się.");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('Hasło jest zbyt słabe. Spróbuj dodać znaki specjalne/cyfry.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
      $location.path('/#');
    }

}]);