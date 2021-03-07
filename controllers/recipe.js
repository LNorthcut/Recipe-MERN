const db = require("../models");

module.exports ={
    searchingAll: function(req, res){
       db.Instructions
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err));
        
    },
    addRecipe: function(req, res){
        db.Instructions.create(req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err=>res.status(422).json(err));

    },
    findMe: (req, res, next)=>{
        const id = req.params.id
        db.Instructions.findById(id)
        .exec(function (err, results) {
            if (err) return console.error(err)
        try {
            console.log(results)            
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        } 
    }
        )}
        };