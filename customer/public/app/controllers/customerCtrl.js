
var module = angular.module('app.customerCtrl', ['ngResource']);

module.controller('customerCtrl', function($scope, $http, $routeParams, $location) {

    // Lista de Clientes
    $scope.rows = null;

    // Um cliente
    $scope.row = {};

    // Paginação
    $scope.currentPage = 0;
    $scope.pageSize = 2;

    $scope.numberOfPages = function() {
        if ($scope.rows != null)
            return Math.ceil($scope.rows.length / $scope.pageSize);
        return 0;
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
            $http.get($scope.server('/customers/' + $routeParams.id))
                .success(function(data) {
                    $scope.row = data[0];
                });
        }
    }

    $scope.insert = function() {
        $scope.showLoader();
        $http.post($scope.server('/customers'), $scope.row)
            .success(function(data) {
                alert('Salvo com sucesso');
                $location.path('/clientes/' + data._id);
            });
    }

    $scope.update = function() {
        $scope.showLoader();
        $http.put($scope.server('/customers/' + $routeParams.id), $scope.row)
            .success(function(data) {
                alert('Alterado com sucesso');
                $location.path('/clientes/' + $routeParams.id);
            });
    }
});
