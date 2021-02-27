const path = require('path');
const router = require("express").Router();
const serveSide = require("./backend/api");

router.use("/api", serveSide )
router.use((req, res)=> {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
module.exports = router;