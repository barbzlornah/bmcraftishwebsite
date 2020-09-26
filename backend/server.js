import express from 'express'; //server
import data from './data';


const app = express(); //define app


//create app endpoint
app.get("/api/products",(req,res) =>{
    res.send(data.products);
})

app.listen(3000, ()=> {console.log("Server started at http://localhost:5000")})