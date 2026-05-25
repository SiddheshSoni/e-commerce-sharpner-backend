

const showAllProducts = ()=>{
    return;
}
const selectProductsById = (id)=>{
    return id;
}
const addProduct = (data)=>{
    console.log(data);
    return {value:data.productName};
}

module.exports ={
    selectProductsById,
    showAllProducts,
    addProduct
}