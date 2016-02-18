var Recipe = require('./recipeModel.js');

var exports = {};

exports.getAll = function (req, res, next) {
  Recipe.find({})
    .then(function(results){
      res.json(results);
    })
    .catch(function(err){ next(err); })
}

exports.createRecipe = function (req, res, next) {
  Recipe(req.body).save()
    .then(function(results){
      res.json(results);
    })
    .catch(function(err){ next(err); })
}

module.exports = exports;