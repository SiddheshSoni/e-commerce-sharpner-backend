const productServices = require("../services/productServices");
const path = require("path");

const getAllProducts =(req, res)=>{
    productServices.showAllProducts;
    res.sendFile(path.join(__dirname,"..","views","fetchProducts.html"));
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