(function(angular){
	'use strict'

	//创建正在热映模块
	var module = angular.module('movieCat.coming_soon',['ngRoute']);
	//配置模块的路由
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/coming_soon',{
			templateUrl:'./coming_soon/view.html',
			controller:'movieCat.coming_soon.Controller'
		});
	}]);
	module.controller('movieCat.coming_soon.Controller',['$scope',function($scope){

	}]);
})(angular);