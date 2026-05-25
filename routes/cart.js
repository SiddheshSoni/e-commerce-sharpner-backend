const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/cart/:userid", cartController.addToCart);
router.post("/cart/:userid", cartController.getAllCartItems);
module.exports = router;