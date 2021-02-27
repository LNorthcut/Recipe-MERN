const db = require("../models");

module.exports ={
    searchingAll: function(req, res){
       db.Instructions
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err));
        
    },
    addInfo: function(req, res){
        db.Instructions.create(req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err=>res.status(422).json(err));

    }
};