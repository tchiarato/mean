(function() {
    'use strict';

    var app = angular.module('app', [
        'ngRoute', 
        'ngAnimate', 

        'ui.bootstrap', 
        'easypiechart', 
        'textAngular', 
        'ui.tree', 
        'ngMap', 
        'ngTagsInput', 

        'app.controllers', 
        'app.directives', 
        'app.nav',
        'app.ui.services',
        'app.authentication.controller',
        'app.authentication.service',
        'app.user'
    ]);

    app.config([
                '$routeProvider', '$locationProvider', 
        function($routeProvider ,  $locationProvider) {

            return $routeProvider
                .when('/dashboard', 
                    { templateUrl: 'views/dashboard.html',   access: {  requiredAuth: true } })
                .when('/blank', 
                    { templateUrl: 'views/pages/blank.html', access: {  requiredAuth: true } })
                .when('/auth/signin', 
                    { templateUrl: 'views/pages/signin.html' })
                .when('/500', 
                    { templateUrl: 'views/pages/500.html' })
                .when('/404', 
                    { templateUrl: 'views/pages/404.html' })
                .when('/',
                    { redirectTo: '/dashboard' })
                .otherwise({ redirectTo: '/404' });
        }
    ]);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('TokenInterceptor');
    });

    app.run(function($rootScope, $location, $window, AuthenticationService) {
        $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
            //redirect only if both isAuthenticated is false and no token is set
            if (nextRoute != null && nextRoute.access != null 
                && nextRoute.access.requiredAuth 
                && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {
                $location.path("/auth/signin");
            }
        });
    });
})();
