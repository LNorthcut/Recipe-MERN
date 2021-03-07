const router = require("express").Router();
const rController = require("../../controllers/recipe.js");

router.route("/")
    .get(rController.searchingAll);

router.route("/add")
    .post(rController.addRecipe);

    
router.route("/find/:id")
    .get(rController.findMe)
    // router.route("/login", (req, res)=>{
    //     res.send({
    //         token: "testingToken"
    //     });
    //   });

module.exports = router;