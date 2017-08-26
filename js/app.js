(function(angular){
	'use strict'
	var myApp = angular.module('movieCat',[
		'ngRoute',
		'movieCat.service.http',
		'movieCat.list']);
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({
			redirectTo: '/in_theaters/1'
		});
	}]);


})(angular);
