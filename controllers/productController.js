const productServices = require("../services/productServices");

const getAllProducts =(req, res)=>{
    res.send("Fetched all Products!")
}

const getProductsById = (req, res)=>{
    const id = productServices.selectProductsById(req.params.id);
    res.send(`Fetching product with ID: ${id}`);
};

const addProduct = (req, res)=>{
    productServices.addProduct;
    res.send(` Added a new Product!`)
};

module.exports ={
    getAllProducts,
    addProduct,
    getProductsById,
}