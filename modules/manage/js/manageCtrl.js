angular.module('BBApp').
controller('manageCtrl', function ($scope, $firebaseArray, $firebaseObject, FBMSG) {
        $scope.clicked = false;

       $scope.remove = function(day, classie){
        if(confirm("Czy na pewno chcesz odwołać zajęcia " + classie + " w dniu " + day + "? Zostanie wysłany email do każdej z uczestniczek zajęć")){
                      var refToRem = firebase.database().ref().child(day+'/'+classie);
           var objRem = $firebaseObject(refToRem);
            objRem.$remove().then(function(ref) {

            }, function(error) {
            console.log("Error:", error);
            });


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

            var miniarr = [];


            angular.forEach(value, function(v, k) { 
              angular.forEach(v, function(vv, kk) { 
                   miniarr.push(vv);   
                  // console.log('vv', vv);       
                   //$scope.ks.indexOf(k+key) === -1 ? $scope.ks.push(k+"  " +key) : console.log("This item already exists");
              });
                 $scope.data.push({'key': key, 'k': k, 'kk': miniarr});
              });

          }


        }); 

     });
        }else{

        }

        }

      $scope.show = function(){
          $scope.clicked = !$scope.clicked;
         // console.log($scope.clicked);
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

            var miniarr = [];


            angular.forEach(value, function(v, k) { 
              angular.forEach(v, function(vv, kk) { 
                   miniarr.push(vv);   
                  // console.log('vv', vv);       
                   //$scope.ks.indexOf(k+key) === -1 ? $scope.ks.push(k+"  " +key) : console.log("This item already exists");
              });
                 $scope.data.push({'key': key, 'k': k, 'kk': miniarr});
              });

          }else{
            if (key != "classes" && key!= "days" && key!= "users" && key!= "products" && key!="trainers" && key!="wear") {  //$scope.products.push(key + value)
              var miniarr2 = [];
              angular.forEach(value, function(v, k) { 
                miniarr2.push(v);
              });
                $scope.products.push({'key': key, 'kk': miniarr2});

            }
          }
       });
      $scope.rowsCount = [];
      $scope.createRows = function() {
           for (var i = 0; i < ($scope.data.length / 4); i++) {
            $scope.rowsCount.push(i);
            //console.log('i', i);
    }
  };

           $scope.loaded = true;
       //$scope.data = counts;
     });

//console.log($scope.data, 'sc');

var counts = {};

});