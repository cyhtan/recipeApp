angular.module('search.controller', [])

.controller('SearchCtrl', ['$scope', 'Recipe', function($scope, Recipe){

  $scope.byName = '';
  $scope.filters = {
    tags: [],
    ingredients: [],
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

  $scope.addIngred = function (ingredName) {
    var i = $scope.filters.ingredients.indexOf(ingredName);
    if (i === -1) $scope.filters.ingredients.push( ingredName );
    $scope.ingredName = '';
  };
  $scope.addTag = function (tagName) {
    var i = $scope.filters.tags.indexOf(tagName);
    if (i === -1) $scope.filters.tags.push( tagName );
    $scope.tagName = '';
  };


  $scope.filterName = function(recipe, index, recipes){
    return new RegExp($scope.byName, 'i').test(recipe.name);
  };
  
  $scope.filterIngreds = function(recipe, index, recipes){
    var ingredFilters = $scope.filters.ingredients;
    var ingreds = recipe.ingredients.map(function(ingredient){ return ingredient.name; });
    var i = -1;
    while (++i < ingredFilters.length) {
      if (ingreds.indexOf(ingredFilters[i]) === -1) return false;
    }
    return true;
  };  

  $scope.filterTags = function(recipe, index, recipes){
    var tagFilters = $scope.filters.tags;
    var i = -1;
    while (++i < tagFilters.length) {
      if (recipe.tags.indexOf(tagFilters[i]) === -1) return false;
    }
    return true;
  };

  $scope.filterMealtime = function(recipe, index, recipes){
    var mealtimeFilters = $scope.filters.mealtime;
    var key;
    for (key in mealtimeFilters) {
      if (mealtimeFilters[key] && !recipe.mealtime[key]) return false;
    }
    return true;
  };

  $scope.filterSpecial = function(recipe, index, recipes){
    var specialDietFilters = $scope.filters.specialDiet;
    var key;
    for (key in specialDietFilters) {
      if (specialDietFilters[key] && !recipe.specialDiet[key]) return false;
    }
    return true;
  };


  Recipe.getAll()
    .then(function(res){
      console.log(res);
      $scope.recipes = res.data;
    })

}]);