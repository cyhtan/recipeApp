angular.module('create-recipe.controller', [])

.controller('CreateRecipeCtrl', ['$scope', 'Recipe', function($scope, Recipe){
  
  $scope.recipe = {
    name        : '', 
    description : '',
    tags        : [],
    ingredients : [],
    mealtime    : {
                    breakfast : false,
                    lunch     : false,
                    dinner    : false
                  },
    specialDiet: {
                    glutenFree : false,
                    dairyFree  : false
                 }
  };


  $scope.addIngred = function (name, amount, unit) {
    var newIngred = {name: name, amount: amount, unit: unit};
    var curIngreds = $scope.recipe.ingredients.map(function(ingred){return ingred.name;});
    if (curIngreds.indexOf(name) === -1) {
      $scope.recipe.ingredients.push( newIngred );
      $scope.ingredName = '';
      $scope.ingredAmt  = '';
      $scope.ingredUnit  = '';
    }
  };

  $scope.addTag = function (tagName) {
    var i = $scope.recipe.tags.indexOf(tagName);
    if (i === -1) $scope.recipe.tags.push( tagName );
    $scope.tagName = '';
  };

  $scope.submitRecipe = function () {
    Recipe.submitRecipe($scope.recipe);
  };

}]);