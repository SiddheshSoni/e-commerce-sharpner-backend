const express = require("express");
const router = express.Router();

router.get("/cart/:userid", (req, res)=>{
    const userid = req.params.userid;
    res.send(`cart items for ${userid}`)
})
router.post("/cart/:userid", (req, res)=>{
    const userid = req.params.userid;
    res.send(`added cart items for ${userid}`)
})
module.exports = router;