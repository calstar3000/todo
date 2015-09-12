'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('TodoListController', [function() {
  this.items = items;
}]);

var items = ['Do a Pluralsite course', 'Clean house', 'Supermarket shop'];
