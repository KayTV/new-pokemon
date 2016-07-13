var app = angular.module('pokemonApp', []);

app.controller('myController', ['$http', '$scope', function($http, $scope) {
  $scope.greeting = "Hello World!";
}]);
