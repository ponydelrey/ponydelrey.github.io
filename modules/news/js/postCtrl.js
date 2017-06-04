angular.module('BBApp').controller('postCtrl', function ($scope, $firebaseArray, $firebaseObject, FBMSG) {


})
.directive('classCard', function(){
  return {
    restrict: 'E',
    scope: {
      myClass: '=myClass'
    },
    template: '<div ui-if="myArr.length" class="training" ng-repeat="date in data track by $index"> {{date}} <i class="fa fa-trash-o pull-right" ng-click="remove($index, date)" aria-hidden="true"></i> </div>',
    controller: function($scope, $firebaseArray, $firebaseObject, FBMSG){
       $scope.remove = function(){
          console.log('lets rwwwemove sometih');
        }

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

        $scope.email = user.email;
        var email = user.email;

        var atIndex = email.indexOf("@");
        var dotIndex = email.indexOf('.');
        var trimmedMail = email.substring(0,atIndex);
        var end = email.substring(atIndex+1,dotIndex);
        var userIdentifier = trimmedMail + end;

        var ref = firebase.database().ref().child('users/' + userIdentifier);
        console.log('ref', ref);

         var obj = $firebaseObject(ref);
         $scope.dateArr = [];
         $scope.keys = [];
         $scope.training = [];


        //take an action after the data loads
        obj.$loaded().then(function() {
          //console.log("Loaded record:", obj.$id, obj.classes);
          angular.forEach(obj, function(value, key) {
          $scope.dateArr.push(value.replace('+', ' '));
          $scope.keys.push(key);
          //console.log(key, value);
       });
          $scope.data = obj;
          //console.log('obj', obj)
     });

        $scope.remove = function(i, data){

            var date = data.substring(0, 10);
            var training = data.substring(17, data.length);

           var refToRem = firebase.database().ref().child('users/' + userIdentifier+ '/'+$scope.keys[i]);
           var objRem = $firebaseObject(refToRem);
            objRem.$remove().then(function(ref) {
          // data has been deleted locally and in the database
            }, function(error) {
            console.log("Error:", error);
            });


     //   var ref = firebase.database().ref().child('users/' + userIdentifier);
     //   var obj = $firebaseObject(ref);

        var classesRef = firebase.database().ref().child(date +'/'+ training+'/');
        var objClasses = $firebaseObject(classesRef);
        var keyToRem;

        objClasses.$loaded().then(function() {
          angular.forEach(objClasses, function(v, k) {
            console.log('k v', k, v)
            if (v == userIdentifier){
            keyToRem=k;
            var turboString = date +'/' + training + '/' + keyToRem;
            var refClassToRem = firebase.database().ref().child(date+ '/'+ training +'/'+keyToRem);
            var objClassRem = $firebaseObject(refClassToRem);
            objClassRem.$remove().then(function(ref) {
            }, function(error) {
            console.log("Error:", error);
            });
          }

          });



     });


         $scope.keys = [];
    obj.$loaded().then(function() {
          angular.forEach(obj, function(value, key) {
          $scope.dateArr.push(value.replace('+', ' '));
          $scope.keys.push(key);
          console.log(key, value);
       });
          if ($scope.keys[0] == undefined){
            window.alert('Nie masz w planie żadnych zajęć!');
          }
          $scope.data = obj;
     });

        }
 

  } else {
    window.alert('Something went wrong!')
  }
});

    }
  }
});