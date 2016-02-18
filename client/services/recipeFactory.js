angular.module('recipe.factory', [])

.factory('Recipe', ['$http', function($http){

  var Recipe = {};
  
  Recipe.getAll = function (){
    return $http({ method: 'get', url: '/api/recipes' });
  };


  return Recipe;

}]);