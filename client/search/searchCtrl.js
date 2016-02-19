angular.module('search.controller', [])

.controller('SearchCtrl', ['$scope', 'Recipe', 'Filter', function($scope, Recipe, Filter){

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

  $scope.filters        = Filter.currentFilters;
  $scope.filterName     = Filter.filterName;
  $scope.filterIngreds  = Filter.filterIngreds;
  $scope.filterTags     = Filter.filterTags;
  $scope.filterMealtime = Filter.filterMealtime;
  $scope.filterSpecial  = Filter.filterSpecial;

  Recipe.getAll()
    .then(function(res){
      console.log(res);
      $scope.recipes = res.data;
    });

}])

// .directive('click-to-edit', [
//   function(){
//     return {
//       restrict: "A",
//       link: function(scope, element, attrs){
        
//       }
//     };
//   }

// ]);