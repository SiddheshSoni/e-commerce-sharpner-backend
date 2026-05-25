const submitHandler = (e) =>{
    e.preventDefault();
    const name = e.target.product.value;
    // console.log(name);
    const newProd = {
        "productName":name,
    }
    axios.post("http://localhost:4000/products", newProd).then(res=>{
        console.log(res.data); 
    })
}