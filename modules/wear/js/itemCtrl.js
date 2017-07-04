angular.module('BBApp')
.controller("itemCtrl", function ($scope, $routeParams, $firebaseArray, $firebaseObject) {
  $scope.idd =  $routeParams.idd; 


 var ref = firebase.database().ref().child('wear/');

         var obj = $firebaseObject(ref);
          $scope.arr = [];
          $scope.sizes = [];

        //take an action after the data loads
        obj.$loaded().then(function() {
          //console.log("Loaded record:", obj.$id, obj.classes);
          angular.forEach(obj, function(value, key) {
            if(value['id']==$scope.idd){
                $scope.item = value;
              }else if (value['size']!=undefined){
              	console.log('ff', value)
           angular.forEach(key, function(v, k) {
           	$scope.sizes.push(k);
              //console.log('v k', v, k)
       });
              }

       });
          // console.log('valle', $scope.sizes);

     });



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

      var refClass2 = firebase.database().ref().child(product);
      var newUserRef2 = refClass2.push(userIdentifier);
      window.alert('Dziękujemy za złożenie zamówienia, informację o postępach otrzymasz drogą mailową');
    }else{
      window.alert("Zaloguj się, aby składać zamówienia")
    }

  });
}

});