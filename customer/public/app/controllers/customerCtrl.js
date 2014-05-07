
var module = angular.module('app.customerCtrl', ['ngResource']);

module.controller('customerCtrl', function($scope, $http, $routeParams, $location) {

    // Lista de Clientes
    $scope.rows = null;

    // Um cliente
    $scope.row = {};

    // Paginação
    $scope.currentPage = 0;
    $scope.pageSize = 15;

    $scope.numberOfPages = function() {
        return Math.ceil($scope.rows.length / $scope.pageSize);
    }

    $scope.loadAll = function() {
        $scope.showLoader();
        $http.get($scope.server('/customers'))
            .success(function(data) {
                $scope.rows = data;
            });
    }

    $scope.loadRow = function() {
        if ($routeParams.id != null) {
            $scope.showLoader();
            $http.get($scope.server('/customer/' + $routeParams.id))
                .success(function(data) {
                    $scope.row = data;
                });
        }
    }

    $scope.insert = function() {
        $scope.showLoader();
        $http.post($scope.server('/customers'), $scope.row)
            .success(function(data) {
                alert('Salvo com sucesso');
                $location.path('/clientes')
            });
    }
});
