(function() {
    'use strict';
    var appService = angular.module('app.user', []);

    appService.factory('UserService', function($http) {
        return {
            logIn: function(email, password) {
                return $http.post('/token', { email: email, password: password });
            }
        }
    });
})();