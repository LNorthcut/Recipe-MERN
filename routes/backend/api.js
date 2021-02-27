const router = require("express").Router();
const rController = require("../../controllers/recipe.js");

router.route("/")
    .get(rController.searchingAll);

router.route("/add")
    .post(rController.addInfo)

module.exports = router;