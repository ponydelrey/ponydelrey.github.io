angular.module('BBApp').controller('loginCtrl', ['FBMSG', '$location','$scope', function (FBMSG, $location, $scope) {

	var ref = new Firebase(FBMSG);

  $scope.resetPass = function(){
  var email = $scope.email;

  firebase.auth().sendPasswordResetEmail("annaczech93@gmail.com").then(function() {

    window.alert('Sprawdź swoją skrzynkę pocztową. Otrzymałaś emaila z linkiem do zmiany hasła')
     });
  }


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