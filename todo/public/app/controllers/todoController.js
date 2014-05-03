
var module = angular.module('todoApp.todoCtrl', ['ngResource']);

module.controller('todoCtrl', function($scope, $http, $resource) {

    var Todo = $resource('/api/todos/:id');

    $scope.formData = {};

    $scope.loadTodos = function() {
        Todo.query(function(data) {
            $scope.todos = data;
        });
    }

    $scope.createTodo = function() {
        var todo = new Todo();

        todo.text = $scope.formData.text;
        todo.done = false;
        todo.$save();
        
        $scope.formData = {};
        $scope.loadTodos();
    }

    $scope.deleteTodo = function(id) {
        Todo.delete({ id: id });
        $scope.loadTodos();
    }

    $scope.loadTodos();
});