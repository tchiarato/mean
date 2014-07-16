(function() {
    'use strict'

    var appController = angular.module('app.authentication.controller', []);

    appController.controller('AuthenticationCtrl', [
    '$scope', '$rootScope', '$location', '$window', 'UserService', 'AuthenticationService',
    'logger',
    function($scope ,  $rootScope ,  $location ,  $window ,  UserService ,  AuthService, logger) {

        $scope.login = function(username, password) {
            if (username !== undefined && password !== undefined) {
                UserService.logIn(username, password)
                .success(function(data) {

                    $rootScope.$broadcast('auth:success', data);

                    AuthService.isAuthenticated = true;
                    $window.sessionStorage.token = data.token;
                    $location.path('/dashboard');

                    logger.logSuccess('Olá! Seja bem vindo ' + data.name);
                })
                .error(function(status, data) {
                    AuthService.isAuthenticated = false;
                    delete $window.sessionStorage.token;

                    logger.logError('Atenção! Usuário e/ou Senha informados não foram encontrados.');
                });
            }
        }
        $scope.logout = function() {

            if (AuthService.isAuthenticated) {
                AuthService.isAuthenticated = false;
                delete $window.sessionStorage.token;
            } 

            $location.path('/auth/signin');
        }
    }]);
})();