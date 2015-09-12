'use strict';

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/todo.html',
    controller: 'TodoListController'
  });
}])
.controller('TodoListController', [function() {
  this.yesterday = yesterday;
  this.today = today;
  this.tomorrow = tomorrow;
  this.newTodo = {};

  this.addTodo = function() {
      this.newTodo.done = false;
      this.today.items.push(this.newTodo);
      this.newTodo = {};
  }
}]);

var yesterday = {
    items: [
        { title: 'Do a Pluralsite course',  done: true },
        { title: 'Clean house',             done: true },
        { title: 'Supermarket shop',        done: true }
    ]
};

var today = {
    items: [
        { title: 'Do a Pluralsite course',  done: false },
        { title: 'Clean house',             done: false },
        { title: 'Supermarket shop',        done: false }
    ]
};

var tomorrow = {
    items: [
        { title: 'Do a Pluralsite course',  done: false },
        { title: 'Clean house',             done: false },
        { title: 'Supermarket shop',        done: false }
    ]
};
