var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId;
    // hooks    = require('../modelTriggers.js');

var RecipeSchema = new mongoose.Schema({
    name           : { type: String,   required: true },
    description    : { type: String },
    tags           : [],
    ingredients    : [], // name: _ , amount: _
    containsDairy  : { type: Boolean },
    containsGluten : { type: Boolean },
    created        : { type: Date },
    updated        : { type: Date }
});

// hooks.setRoadmapHooks(RecipeSchema);

module.exports = mongoose.model('Recipe', RecipeSchema);
