const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theRecipes = new Schema({
    recipe_name: {type: String},
    author_name: {type: String},
    recipe_description: {type: [String]},
    duration: {type: Number},
    steps: {type: [String]}
},
{
    timestamps: true
 
});
// creates a new entry
const Instructions = mongoose.model("Instructions", theRecipes);
module.exports = Instructions;