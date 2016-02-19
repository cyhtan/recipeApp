var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId;
    // hooks    = require('../modelTriggers.js');

var RecipeSchema = new mongoose.Schema({
  name        : { type: String,   required: true },
  description : { type: String },
  tags        : [],
  ingredients : [], // name: _ , amount: _ , unit: _
  mealtime    : {
                   breakfast: { type: Boolean },
                   lunch    : { type: Boolean },
                   dinner   : { type: Boolean }
                },
  specialDiet : {
                   glutenFree : { type: Boolean },
                   dairyFree  : { type: Boolean }
                },
  created     : { type: Date },
  updated     : { type: Date }
});

// hooks.setRoadmapHooks(RecipeSchema);

module.exports = mongoose.model('Recipe', RecipeSchema);
