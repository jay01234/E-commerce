import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './Product.css'

const OrderSummary = () => {
    const state = useSelector((state) => state.handleCart)

    let totalProducts = 0;
    let totalOrder = 0;
    let totalItems = 0;
    let totalDiscountPercentage = 0;
    
    for (const obj of state) {
      const qtyPrice = obj.qty * obj.price;
      totalProducts += qtyPrice;
      totalOrder += qtyPrice - obj.discountPercentage;
      totalItems += obj.qty;
      totalDiscountPercentage += obj.discountPercentage;
    }
  return (
    <Card sx={{ maxWidth: 345,marginTop: '20px', border: '1px solid' }}>
        <CardContent>
            <Typography variant="h5" component="h2">Total</Typography>
            <div className='bottomCardPrice'>
                <div>Items ({totalItems})</div>
                <div className='marginAuto'>${totalProducts}</div>
            </div>
            <div className='bottomCardPrice'>
                <div>Discount</div>
                <div className='marginAuto'>${totalDiscountPercentage.toFixed(2)}</div>
            </div>
        </CardContent>

        <div className='bottomCard'>
            <div className='bottomCardPrice'>
                <div>Total Order</div>
                <div className='marginAuto'>${totalOrder}</div>
            </div>
           
        </div>
    </Card>
  );
}

export default OrderSummary;
