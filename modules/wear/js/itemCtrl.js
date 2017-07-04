angular.module('BBApp')
.controller("itemCtrl", function ($scope, $routeParams, $firebaseArray, $firebaseObject) {
  $scope.idd =  $routeParams.idd; 


 var ref = firebase.database().ref().child('wear/');

         var obj = $firebaseObject(ref);
          $scope.arr = [];
          $scope.arr2 = [];

        //take an action after the data loads
        obj.$loaded().then(function() {
          //console.log("Loaded record:", obj.$id, obj.classes);
          angular.forEach(obj, function(value, key) {
            if(value['id']==$scope.idd){
                $scope.item = value;
              }else if (value['size']!=undefined){
              	console.log('ff', value)
           angular.forEach(key, function(v, k) {
           	arr2.push(k);
              //console.log('v k', v, k)
       });
              }

       });
          console.log('vallie', $scope.item);

     });



});