angular.module('BBApp').controller('loginCtrl', ['FBMSG', function (FBMSG) {

	var self = this;
	var ref = Firebase(FBMSG);
	self.signup = function(){
		ref.createUser({
			email: self.email,
			password: self.password
		}), function(error, userData) {
			if(error){
				console.log('something went wrong', error);
			}else {
				console.log('user created', userData);
			}
		}
	
// 	ref.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log('xx')
//   // ...
// });
}]);