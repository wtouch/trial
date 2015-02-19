'use strict';

define(['angular',
 'angularRoute',
 'routeResolver',
 'css!../css/bootstrap.min','css!../css/style'
], function (angular, angularRoute) {
    // Declare app level module which depends on views, and components
    var app = angular.module('realEstate', [
   'ui.router', 'routeResolverServices',
 ]);
    app.config(['$stateProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider','$urlRouterProvider',
    function ($stateProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider,$urlRouterProvider) {

            //Change default views and controllers directory using the following:
            routeResolverProvider.routeConfig.setBaseDirectories('modules/', 'modules/');

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $urlRouterProvider.otherwise("/state1");
			
			$stateProvider
			.state('login', {url: "/login", templateUrl: "modules/login/login.html"})
			.state('state1', route.resolve({controller:'login', template: 'login', label:"home"}, 'users/'))

                /* .when('/', route.resolve({
                    controller: 'login',
                    template: 'login',
                    label: "Home"
                }, 'users/'))
                .when('/login', route.resolve({
                    controller: 'login',
                    template: 'login',
					label: "Login"
                }, 'users/')); */
				
				
				console.log(route.resolve({controller:'login', template: 'login', label:"home"}, 'login/'));
            
 }]);
    app.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.metaTitle = "Real Estate Portal";
        //$rootScope.breadcrumbs = breadcrumbs;
 }]);
    return app;
});