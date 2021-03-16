const path = require('path');
const mongoose = require('mongoose')
const router = require("express").Router();
const serveSide = require("./backend/api");
const Instructions = require ("../models/recipe_models.js");

router.route('/get').get((req, res)=> {
    Instructions.find()
    .then(foundRecipes => res.json(foundRecipes))
});
    router.use("/login", (req, res)=>{
    res.send({
        token: "testingToken"
    });
  });

  router.route('/api/create').post((req, res, next) => {
    Instructions.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)

        }
    })
});
router.use((req, res)=> {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})
module.exports = router;