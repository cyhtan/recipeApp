angular.module('search.controller', [])

.controller('SearchCtrl', ['$scope', 'Recipe', function($scope, Recipe){

  $scope.byName = '';
  $scope.filters = {
    tags: [],
    ingredients: [],
    glutenFree: false,
    dairyFree: false
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



  Recipe.getAll()
    .then(function(res){
      console.log(res);
      $scope.recipes = res.data;
    })

}]);