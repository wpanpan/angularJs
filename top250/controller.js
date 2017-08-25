(function(angular){
	'use strict'
	
	//创建正在热映模块
	var module = angular.module('movieCat.top250',['ngRoute']);
	//配置模块的路由
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/top250',{
			templateUrl:'./top250/view.html',
			controller:'movieCat.top250.Controller'
		});
	}]);
	
	module.controller('movieCat.top250.Controller',[
		'$scope',
		'$http',
		function($scope,$http){
			//异步获取本地数据
			$scope.message = '';
			$scope.subjects = [];
			$http
			.get('/moviecat/datas/top250.json')
			.then(function(resource){
				if(resource.status == 200){
					$scope.subjects = resource.data.subjects;
				}else{
					$scope.message = '请求出错,错误信息：'+error.statusText;
				}
			},function(error){
				$scope.message = '请求出错,错误信息：'+error.statusText;
			});
			
	}]);


})(angular);