angular.module('BBApp').controller('postCtrl', function ($scope) {

console.log('so it workjjs');
})
.directive('classCard', function(){
  return {
    restrict: 'E',
    scope: {
      myClass: '=class'
    },
    template: '<div class="hour"></div>'
  },
  controller: function ($scope){

      // var user = firebase.auth().currentUser;
      // var email = user.email;

      // var refClass = firebase.database().ref().child(unix + '/' + className);
      // var newUserRef = refClass.push(email);


      // var atIndex = email.indexOf("@");
      // var dotIndex = email.indexOf('.');
      // var trimmedMail = email.substring(0,atIndex);
      // var end = email.substring(atIndex+1,dotIndex);
      // var userIdentifier = trimmedMail + end;
      // var refUserList = firebase.database().ref().child('users' + '/' + userIdentifier);
      // var newUserRef = refUserList.push(unix + '+' + className);
  }
})