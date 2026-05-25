const getAllProducts =(req, res)=>{
    res.send("Fetched all Products!")
}

const getProductsById = (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
};

const addProduct = (req, res)=>{
    res.send(` Added a new Product!`)
};

module.exports ={
    getAllProducts,
    addProduct,
    getProductsById,
}