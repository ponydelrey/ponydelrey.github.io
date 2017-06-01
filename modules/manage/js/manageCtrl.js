angular.module('BBApp').controller('manageCtrl', function ($scope, $firebaseArray, $firebaseObject, FBMSG) {


        $scope.clicked = false;

       $scope.remove = function(){
          console.log('lets rwwwemove sometih');
        }

      $scope.show = function(){
          $scope.clicked = !$scope.clicked;
          console.log($scope.clicked);
        }


      

     var ref = firebase.database().ref();
     var obj = $firebaseObject(ref);
     $scope.data = [];
     $scope.ks = [];
     $scope.products =[];
     var forbidden = ["classes", "days", "trainers", "users", "wear"];

     //take an action after the data loads
     obj.$loaded().then(function() {
       angular.forEach(obj, function(value, key) {
          if(key.substring(0,4)=="2017"){
            //console.log(value, key);
           
            // angular.forEach(value, function(v, k) { 
            //   angular.forEach(v, function(vv, kk) { 
            //     console.log(vv, kk, 'vvkk');
            //        $scope.data.push(key+k);
            //        $scope.ks.indexOf(k+key) === -1 ? $scope.ks.push(k+"  " +key) : console.log("This item already exists");

            //   });
            //   });
                       var miniarr = [];

            angular.forEach(value, function(v, k) { 
              angular.forEach(v, function(vv, kk) { 

                   miniarr.push(vv);
                
                   //$scope.ks.indexOf(k+key) === -1 ? $scope.ks.push(k+"  " +key) : console.log("This item already exists");
              });
                 $scope.data.push({'key': key, 'k': k, 'kk': miniarr});
              });

          }else{

            if (key != "classes") {$scope.products.push(key)}
          }
       });
  $scope.rowsCount = [];
  $scope.createRows = function() {
    for (var i = 0; i < ($scope.data.length / 4); i++) {
      $scope.rowsCount.push(i);
      console.log('i', i);
    }
  };

   $scope.createRows();
       //$scope.data = counts;
     });

//console.log($scope.data, 'sc');

var counts = {};

});