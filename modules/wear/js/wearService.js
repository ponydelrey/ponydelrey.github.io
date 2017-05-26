angular.module('BBApp').service('helloService',function($firebaseObject){

  this.retrieveProducts=function(type){
     var ref = firebase.database().ref().child('wear/');

         var obj = $firebaseObject(ref);
         var arr = [];

        //take an action after the data loads
        obj.$loaded().then(function() {
          //console.log("Loaded record:", obj.$id, obj.classes);
          angular.forEach(obj, function(value, key) {
          	          		if(value['typ']==type){
          			arr.push(value);
          		}
          		angular.forEach(value, function(v, k) {
          		//console.log('v k', v, k)
       });
       });
          console.log('arr', arr);
          return arr;
     });

  }
});