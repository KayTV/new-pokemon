var app = angular.module('pokemonApp', []);

app.controller('myController', ['$http', '$scope', function($http, $scope) {
  $scope.greeting = "Hello World!";
  $scope.generatePokemon = function() {
    var randomPokemon = Math.floor(Math.random() * 720)+1;

    $http({
      url: 'http://pokeapi.co/api/v2/pokemon/' +
            randomPokemon + '/',
      method: 'GET'
    })
    .then(function (result) {
      console.log(result.data.sprites);
      $scope.pokemon = result.data;
      $scope.img = result.data.sprites.front_default;
      // $scope.loadingName = false;
    });
  };

}]);
