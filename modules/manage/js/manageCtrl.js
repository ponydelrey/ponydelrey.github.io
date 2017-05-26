angular.module('BBApp').controller('manageCtrl', function ($scope, $firebaseArray, $firebaseObject, FBMSG) {


       $scope.remove = function(){
          console.log('lets rwwwemove sometih');
        }


     var ref = firebase.database().ref();
     var obj = $firebaseObject(ref);
     $scope.data = [];
     $scope.ks = [];

     //take an action after the data loads
     obj.$loaded().then(function() {
        console.log("MANAGMENT PENDING", obj.$id, obj.classes);
       angular.forEach(obj, function(value, key) {
          if(key.substring(0,4)=="2017"){
            //console.log(value, key);
           
            angular.forEach(value, function(v, k) { 
              angular.forEach(v, function(vv, kk) { 
                //console.log(vv, kk);
                   $scope.data.push(key+k);
                   $scope.ks.indexOf(k+key) === -1 ? $scope.ks.push(k+"  " +key) : console.log("This item already exists");

              });
              });
          }
       });
       $scope.data.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
       $scope.data = counts;
     });

console.log($scope.data, 'sc');

var counts = {};

});