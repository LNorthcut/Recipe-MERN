const router = require("express").Router();
const rController = require("../../controllers/recipe");
const authen = require('../../controllers/auth');

router.route("/")
    .get(rController.searchingAll);

router.route("/add")
    .post(rController.addInfo);

router.route("/register")
.post(authen.signUp)

    
router.route('/login')
    .post(authen.signIn) ;
      
    // router.route("/login", (req, res)=>{
    //     res.send({
    //         token: "testingToken"
    //     });
    //   });

module.exports = router;