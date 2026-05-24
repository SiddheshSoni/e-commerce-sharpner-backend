const express = require("express");
const router = express.Router();

router.get("/users", (req, res)=>{
    res.send("Fetched all users!")
});
router.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
});
router.post("/", (req, res)=>{
    res.send(`Added a new user!`)
});

module.exports = router;