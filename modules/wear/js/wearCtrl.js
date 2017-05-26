angular.module('BBApp')
.controller("wearCtrl", function($scope, $firebaseArray, $firebaseObject, helloService) {


 var ref = firebase.database().ref().child('wear/');

         var obj = $firebaseObject(ref);
          $scope.arr = [];
          $scope.arr2 = [];

        //take an action after the data loads
        obj.$loaded().then(function() {
          //console.log("Loaded record:", obj.$id, obj.classes);
          angular.forEach(obj, function(value, key) {
                          if(value['typ']=='shoes'){
                $scope.arr.push(value);
              }else if (value['typ']=='bra'){
                $scope.arr2.push(value);
              }
              angular.forEach(value, function(v, k) {
              //console.log('v k', v, k)
       });
       });
          console.log('arr', $scope.arr);

     });

$scope.bras = $scope.arr;
$scope.heels = $scope.arr2;


$scope.buy = function(product){

     firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var alreadyInList;


      var atIndex = email.indexOf("@");
      var dotIndex = email.indexOf('.');
      var trimmedMail = email.substring(0,atIndex);
      var end = email.substring(atIndex+1,dotIndex);
      var userIdentifier = trimmedMail + end;

      var refClass = firebase.database().ref().child('users' + '/' + userIdentifier);
      var newUserRef = refClass.push(product);

      window.alert('Dziękujemy za złożenie zamówienia, informację o postępach otrzymasz drogą mailową');
    }else{
      window.alert("Zaloguj się, aby składać zamówienia")
    }

  });
}


   
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});