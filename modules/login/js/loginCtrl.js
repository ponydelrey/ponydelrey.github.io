angular.module('BBApp').controller('loginCtrl', ['FBMSG', function (FBMSG) {

	var self = this;
	var ref = new Firebase(FBMSG, 'createUser');
	console.log('ref stuff', ref)
	var cb = function() {
		console.log('mockup of a callback')
	}
	self.signUp = function(){
 //Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log('xx', error.message);
  console.log('yy', error);
  // ...
});
	}

}]);