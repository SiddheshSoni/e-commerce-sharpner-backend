const express = require("express");
const router = express.Router();

router.get("/products", (req, res)=>{
    res.send("Fetched all Products!")
})
router.get("/products/:id", (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
})
router.post("/products", (req, res)=>{
    res.send(` Added a new Product!`)
})

module.exports = router;