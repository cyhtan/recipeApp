angular.module('app', [
  'ui.router',
  'search.controller',
  'recipe.factory'
  ])

/*
.run( function($rootScope, $state){
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if( !localStorage.getItem('user.username') && toState.auth === true ){
      event.preventDefault();
      alert('please log in first');
      $state.go('signin');
    }
  });
})
*/



.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('search', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'search/search.html',
          controller: 'SearchCtrl',
        }
      }
    })
  })