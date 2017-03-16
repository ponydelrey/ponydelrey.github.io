angular.module('BBApp').controller('loginCtrl', ['FBMSG', '$window', function (FBMSG, $window, Service) {

	var self = this;
	var ref = new Firebase(FBMSG);
	console.log('ref fire:', ref);
	var cb = function(){
		console.log('cb');
	}
	self.signUp = function(){
		var email = self.email;
        var password = self.password;
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

        var host = $window.location.host;
        var landingUrl = "http://" + host + "/#/";
        alert("Being redirected to: ",landingUrl);
        $window.location.href = landingUrl;
	}

}]);