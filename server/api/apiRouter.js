var recipeController = require('./recipes/recipeController.js');


module.exports = function (apiRouter) {

  apiRouter.get('/recipes',  recipeController.getAll);
  apiRouter.post('/recipes', recipeController.createRecipe);

};