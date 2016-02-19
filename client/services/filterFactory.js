angular.module('filter.factory', [])

.factory('Filter', function(){

  var Filter = {};
  
  var currentFilters = Filter.currentFilters = {
    byName: '',
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

  Filter.filterName = function(recipe, index, recipes){
    console.log(currentFilters);
    return new RegExp(currentFilters.byName, 'i').test(recipe.name);
  };
  
  Filter.filterIngreds = function(recipe, index, recipes){
    var ingredFilters = currentFilters.ingredients;
    var ingreds = recipe.ingredients.map(function(ingredient){ return ingredient.name; });
    var i = -1;
    while (++i < ingredFilters.length) {
      if (ingreds.indexOf(ingredFilters[i]) === -1) return false;
    }
    return true;
  };  

  Filter.filterTags = function(recipe, index, recipes){
    var tagFilters = currentFilters.tags;
    var i = -1;
    while (++i < tagFilters.length) {
      if (recipe.tags.indexOf(tagFilters[i]) === -1) return false;
    }
    return true;
  };

  Filter.filterMealtime = function(recipe, index, recipes){
    var mealtimeFilters = currentFilters.mealtime;
    var key;
    for (key in mealtimeFilters) {
      if (mealtimeFilters[key] && !recipe.mealtime[key]) return false;
    }
    return true;
  };

  Filter.filterSpecial = function(recipe, index, recipes){
    var specialDietFilters = currentFilters.specialDiet;
    var key;
    for (key in specialDietFilters) {
      if (specialDietFilters[key] && !recipe.specialDiet[key]) return false;
    }
    return true;
  };


  return Filter;

});