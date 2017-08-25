(function(angular){
	'use strict'
	var myApp = angular.module('movieCat',[
		'ngRoute',
		'movieCat.in_theater',
		'movieCat.coming_soon',
		'movieCat.top250']);
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({
			redirectTo:'/in_theater'
		});
	}]);


})(angular);
