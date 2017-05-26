angular.module('BBApp').controller('classCtrl', function ($scope, $firebaseArray, $firebaseObject, FBMSG) {


     var ref = firebase.database().ref();
     var obj = $firebaseObject(ref);

     //take an action after the data loads
     obj.$loaded().then(function() {
        console.log("loaded record:", obj.$id, obj.classes);
       angular.forEach(obj, function(value, key) {
          console.log(key, value);
       });
     });

     // To make the data available in the DOM, assign it to $scope
     $scope.data = obj;
     $scope.days = obj.classes;

   angular.forEach(obj, function(value, key) {
          console.log('g', key, value);
       });
     // For three-way data bindings, bind it to the scope instead
  //   obj.$bindTo($scope, "data");

  

  var day = moment().day();
  console.log('d', day);
  var startDate = moment().subtract(day-1, 'day'); 
  var finishDate = moment().add(5-day, 'day');

  $scope.from = startDate.format('DD.MM');
  $scope.to = finishDate.format('DD.MM');



  $scope.addWeek = function() {
   startDate = startDate.add(7, 'day');
   finishDate = finishDate.add(7, 'day');

  $scope.from = startDate.format('DD.MM');
  $scope.to = finishDate.format('DD.MM');
  //$scope.later = true;

  };

  $scope.addMe = function(className, day, hour) {

      var user = firebase.auth().currentUser;
      var email = user.email;
      var alreadyInList;


      var atIndex = email.indexOf("@");
      var dotIndex = email.indexOf('.');
      var trimmedMail = email.substring(0,atIndex);
      var end = email.substring(atIndex+1,dotIndex);
      var userIdentifier = trimmedMail + end;

    signToClass = function(){


      var refClass = firebase.database().ref().child(unix + '/' + className);
      var newUserRef = refClass.push(userIdentifier);
      var refUserList = firebase.database().ref().child('users' + '/' + userIdentifier);
      var newUserRef = refUserList.push(unix + ' ' +hour+' ' +className);
      
      alert('Zostalas wpisana na zajecia ' + unix+ '. Dziekujemy')

};

    if (day ==1){ 
      var unix = startDate.clone().format('YYYY-MM-DD');
    }else{
      var unix= startDate.clone().add(day-1, 'day').format('YYYY-MM-DD');
    }

    console.log('unix', unix, day);

    if(!firebase.auth().currentUser){
      window.alert("Aby wpisać się na zajęcia, musisz być zalogowana!")
    }
    else{


    if((unix in obj) && (className in obj[unix]) && className !='-') {
      if(Object.keys(obj[unix][className]).length>2){
      window.alert('Nie ma więcej wolnych miejsc na wybrane zajęcia. Przepraszamy!')
      }
      else if  (className == '-')
        {console.log('this is nit a class');}else{
        for (key in obj[unix][className]) {
            if (obj[unix][className][key]==userIdentifier){
              alreadyInList = true
            }
          }
          if(!alreadyInList){
                  signToClass();
          }else{
            window.alert('Przepraszamy, jesteś już na liście uczestników')
          }

    }
       }else{
        if (className == '-'){
          console.log('its not a class');
        }else {
          signToClass();
        }
        
    }

    }

  }

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});