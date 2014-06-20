var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider) {
	$routeProvider
	    .when('/',
            {
            	controller: 'SimpleCtrl',
            	templateUrl: 'partials/view1.html'
            })
	    .when('/view2',
            {
            	controller: 'SimpleCtrl',
            	templateUrl: 'partials/view2.html'
            })
	    .otherwise({redirectTo: '/'});
});

demoApp.controller('SimpleCtrl', function ($scope) {
	$scope.persons = [
	  {name: 'vaibhav', city: 'katni'},
	  {name: 'mansi', city: 'mumbai'},
	  {name: 'nikita', city: 'bilaspur'}
	];
});