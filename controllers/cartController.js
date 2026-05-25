const getAllCartItems = (req, res)=>{
    const userid = req.params.userid;
    res.send(`cart items for ${userid}`)
};

const addToCart = (req, res)=>{
    const userid = req.params.userid;
    res.send(`added cart items for ${userid}`)
};


module.exports ={
    addToCart,
    getAllCartItems,
}