angular.module('recipe.factory', [])

.factory('Recipe', ['$http', function($http){

  var Recipe = {};
  
  Recipe.getAll = function (){
    return $http({ method: 'get', url: '/api/recipes' });
  };  

  Recipe.submitRecipe = function (recipe){
    return $http({ method: 'post', url: '/api/recipes', data: recipe });
  };


  return Recipe;

}]);