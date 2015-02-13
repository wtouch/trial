var test=angular.module('test', []);

test.directive('flipbook', function(){
  return{
    restrict: 'E',
    replace: true,
    
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
  };
});
test.controller("next", function($scope){
  $scope.next = function(){
    console.log("next");
    angular.element(".flipbook").turn("next");
  };
  $scope.addPage = function(book) {
		// 	First check if the page is already in the book
		console.log("Add page");
		var page = 1;
			// Create an element for this page
			var element = $('<div />', {'class': 'page '+((page%2===0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
			// If not then add the page
			angular.element(".flipbook").turn('addPage', element);
			// Let's assum that the data is comming from the server and the request takes 1s.
			setTimeout(function(){
					element.html('<div class="data">Data for page '+page+'</div>');
			}, 1000);
		
	};
});