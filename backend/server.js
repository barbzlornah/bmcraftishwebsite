import express from 'express'; //server
import data from './data';


const app = express(); //define app


//create app endpoint
app.get("/api/products/:id",(req,res) =>{
    const productId = req.params.id;
    const product = data.products.find(x=>x._id===productId);
    if(product)
    res.send(product);
    else
    res.status(404).send({msg:"Product Not Found."})
});
app.get("/api/products",(req,res) =>{
    res.send(data.products);
});

app.listen(5000, ()=> {console.log("Server started at http://localhost:5000")})