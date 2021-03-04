const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theRecipes = new Schema({
    recipe_name: {type: String, required: true},
    author_name: {type: String, required: true},
    ingredients: {type: [String]},
    duration: {type: Number, required: true},
    steps: {type: [String], required: true},
    date: {type: Date}

})
// creates a new entry
const Instructions = mongoose.model("Instructions", theRecipes);
module.exports = Instructions;