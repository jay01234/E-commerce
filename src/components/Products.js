import React, {useState, useEffect} from 'react';
import NetworkRequest, { cartProducts, method } from '../services/NetworkRequest';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import Cart from './Cart';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getProducts();
  },[])
    console.log('loaoaoaoaoa', loading)
  const getProducts = async () => {
    try {
      const requestConfig = {
        method: method.get,
        url: cartProducts.userProduct.getItem,
      };
      const response = await NetworkRequest(requestConfig);
        if (response) {
          setProduct(response.products);
          setLoading(false)
        }
      } catch (error) {
          console.log(error);
        }
      };
  return (
    <Grid container spacing={2} style={{padding: '50px'}}>
      <Grid container xs={9}>
        {product?.map((item) => {
          return (
            <Grid xs={4} style={{marginBottom:'10px'}}>
              <ProductCard 
                item = {item} 
                loading = {loading}
              />
            </Grid>
          )    
        })}
      </Grid>
      <Grid xs={3}>
        <Cart />
      </Grid>
    </Grid>
    )
}

export default Products;