'use strict'

var app = angular.module('todoApp', 
    [
    'ngRoute', 
    'todoApp.todoCtrl'
    ]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', { templateUrl: '/partials/todoIndex', controller: 'todoCtrl' });
});