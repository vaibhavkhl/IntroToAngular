var demoApp = angular.module('demoApp', []);

demoApp.controller('SimpleCtrl', function ($scope) {
	$scope.persons = [
	  {name: 'vaibhav', city: 'katni'},
	  {name: 'mansi', city: 'mumbai'},
	  {name: 'nikita', city: 'bilaspur'}
	];
});