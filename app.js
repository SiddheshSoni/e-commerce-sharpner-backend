const express = require("express");
const app = express();
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")
const cartRoutes = require("./routes/cart")


app.use("/", cartRoutes);
app.use("/", productRoutes);
app.use("/", userRoutes);

app.listen(4000, ()=>{
    console.log("Server started at port 4000");
})