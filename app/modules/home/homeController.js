

'use strict';

define(['app', 'css!modules/home/home'], function (app) {
    var injectParams = ['$scope', '$injector','data'];

    // This is controller for this view
	var homeController = function ($scope, $injector, data) {
		console.log("this is home ctrl " + data.value);
    };
	
    
	// Inject controller's dependencies
	homeController.$inject = injectParams;
	// Register/apply controller dynamically
    app.register.controller('homeController', homeController);
	
	
});
