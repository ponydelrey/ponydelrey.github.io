angular.module('BBApp')
.controller("itemCtrl", function ($scope, $routeParams) {
	console.log('eva here');
  $scope.idd =  $routeParams.idd; 
});