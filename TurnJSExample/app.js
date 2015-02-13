var test=angular.module('test', [])

	/* test.controller('StoreController', ["$http","$scope", function($http, $scope){
    $scope.names = ['Jani','Hege','Kai'];
  }]); */


test.directive('flipbook', function(){
  return{
    restrict: 'E',
    replace: true,
	controller: function($scope){
		$scope.names = ['Jani','Hege','Kai'];
	},
    compile: function(element, attrs){
      
      element.turn({
        width: '300px',
        height: '300px',
        pages: 8,
      }).turn('peel','br');
      
      element.addClass('flipbook');
      
      return function(scope, el) {
        el.on('click', '[data-page]', function(e){
          el.turn('page', $(e.target).data('page'));
        });
      };
    },
    templateUrl: "flipbook.html"
  }
});