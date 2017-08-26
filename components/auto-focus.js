(function(angular) {
  angular.module('movieCat.directives.auto_focus', [])
    .directive('autoFocus', ['$location', function($location) {
      var path = $location.path(); // /coming_soon/1
      return {
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, iElm, iAttrs, controller) {
        	var aLink = iElm.children().attr('href');
        	var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
        	if(path.startsWith(type)){
        		iElm.addClass('active');
        	}
          iElm.on('click', function() {
          	iElm.parent().children().removeClass('active');
            iElm.addClass('active');
          });
        }
      };
    }]);
})(angular);