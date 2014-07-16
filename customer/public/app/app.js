'use strict'

// URL de acesso ao servidor RESTful
var SERVER_URL = "http://localhost:3000/api";

// Criação do $app que é o modulo que representa toda a aplicação.
var $app = angular.module('app', ['ngRoute', 'app.customerCtrl']);

$app.config(function($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // configura o router provider
    $routeProvider
    .when('/', { templateUrl: 'Customer/main.html' })

    .when('/clientes', 
    { 
        controller: 'customerCtrl', 
        templateUrl: 'views/customer/main.html' 
    })

    .when('/clientes/new', 
    {
        controller: 'customerCtrl', 
        templateUrl: 'views/customer/new.html' 
    })

    .when('/clientes/:id', 
    { 
        controller: 'customerCtrl', 
        templateUrl: 'views/customer/update.html' 
    })

    .when('/funcionarios', 
    { 
        controller: 'employeeCtrl', 
        templateUrl: 'views/employee/main.html' 
    })

    .otherwise({ redirectTo: '/' });

    $httpProvider.responseInterceptors.push(function($q, $rootScope) {
        return function(promise) {
            // always disable loader
            $rootScope.hideLoader();
            return promise.then(
                function(response) {

                    // do something on success
                    return(response);

                }, function(response) {

                    // do something on error
                    $data = $response.data;
                    $error = $data.error;
                    console.log($data);

                    if ($error && $error.text)
                        alert("Error: " + $error.text);
                    else
                        if (response.status === 404)
                            alert("Erro ao acessar servidor. Página não encontrada. Veja o Log de erros para maiores detalhes.")
                        else
                            alert("ERROR! See log console!");

                    return $q.reject(response);
                }
            );
        }
    });
});

$app.run(function($rootScope) {
    // Uma flag que define se o ícone de acesso ao servidor deve estar ativo.
    $rootScope.showLoaderFlag = false;

    // Força que o ícone de acesso ao servidor seja ativo
    $rootScope.showLoader = function() {
        $rootScope.showLoaderFlag = true;
    }

    // Força que o ícone de acesso ao servidor seja inativo
    $rootScope.hideLoader = function() {
        $rootScope.showLoaderFlag = false;
    }

    // Método que retorna a URL completa de acesso ao servidor.
    // Evita usar concatenação no controller.
    $rootScope.server = function(uri) {
        return SERVER_URL + uri;
    }
});

$app.filter('startFrom', function() {
    return function(input, start) {
        if (input == null)
            return null;

        start = +start;
        return input.slice(start);
    }
});
