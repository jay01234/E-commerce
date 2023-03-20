import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import './Product.css'

const ProductCard = ({item}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    setOpen(true)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item?.images[0]}
        title="green iguana"
      />
      <div className='bottomCard'>
        <div className='titleName'>{item.title}</div>
        <div className='bottomCardPrice'>
        <span className='priceName'>${item.price}</span>
        <Button 
          size="small" 
          className='addToCart'
          onClick={() => addProduct(item)}
        >
          Add To cart
        </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
