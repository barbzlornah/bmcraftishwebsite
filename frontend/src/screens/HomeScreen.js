import React,{ useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import axios from 'axios';

function HomeScreen(props) {
  const [products,setProduct] = useState([]);

  useEffect(()=> {
    const fetchData = async ()  =>{
      const{data} = await axios.get("/api/products");
      setProduct(data);
    }
    return () =>{

    };
  }, [])

  return <ul className="products">
    {
      products.map(product=>
        <div className="product">
          <link to={'/product'+ product._id}>
            <img className="product-image" src={product.image} alt="productimage"></img>
          </link>
          <div className="product-name">
            <link to ={'/product/' + product._id}>{product.name}
            </link>
            
          </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">Kshs.{product.price}</div>
      <div className="product-rating">{product.rating} Stars{product.stars}</div>
        </div>
        )
    }
  </ul>
}
export default HomeScreen;