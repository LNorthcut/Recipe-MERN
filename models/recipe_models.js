const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theRecipes = new Schema({
    ingredients : {type: String},
    name: {type: String},
    date: {type: Date}

})
// creates a new entry
const Instructions = mongoose.model("Instructions", theRecipes);
module.exports = Instructions;