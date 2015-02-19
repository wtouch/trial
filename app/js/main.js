'use strict';

require.config({
	paths: {
		angular: '../lib/angular/angular',
		breadcrumbs: '../lib/angular/ng-breadcrumbs',
		routeResolver: '../js/routeResolver',
		directives: '../js/directives', 
		services: '../js/services',
		filters: '../js/filters',
		jquery: '../lib/jquery/jquery',
		angularRoute: '../lib/angular/angular-ui-router',
		angularMocks: '../lib/angular/angular-mocks',
		text: '../lib/requirejs-text/text',
		bootstrap: '../lib/bootstrap/ui-bootstrap',
		css: '../lib/css/css.min',
		modules: '../modules',
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'filters':  { "deps": ['angular', 'angularRoute', 'routeResolver'] },
		'directives':  { "deps": ['angular', 'angularRoute', 'routeResolver'] },
		'services':  { "deps": ['angular', 'angularRoute', 'routeResolver'] },
		'routeResolver': { "deps": ['angular', 'angularRoute'] },
		'bootstrap': { "deps": ['angular'] },
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
		
	},
	priority: [
		"angular"
	],
	
	
});

require([
	'angular',
	'angularRoute',
	'app'
	], function(angular, angularRoute, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['realEstate']);
		});
	}
);