import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Skeleton from "@mui/material/Skeleton";
import './Product.css'

const ProductCard = ({item}) => {
  const [open, setOpen] = useState(false);
  const [DataOnHold, setDataOnHold] = useState(true);

  const dispatch = useDispatch();
  
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if(reason === "clickaway") {
      return
    }
    setOpen(false)
  }
  const action = (
    <React.Fragment>

      <IconButton size="samll" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )
  const addProduct = (product) => {
    handleClick();
    dispatch(addToCart(product));
    setOpen(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setDataOnHold(false);
    }, 2500);
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* for item add confirmation snackbar used  */}
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Item Added to Cart"
        action={action}
      />
      {/* Data rendered time delay for user experience skeleton used */}
      {DataOnHold ? (
        <Skeleton variant="rectangular" width={"80%"} height={140} />
      ) : (
        <CardMedia
          sx={{ height: 140 }}
          image={item?.images[0]}
          title="green iguana"
        />
      )}
      <div className='bottomCard'>
        {DataOnHold ? (
          <Skeleton variant="rectangular" width={"80%"} height={20} />
          ) : (
          <div className="titleName">{item.title}</div>
        )}
        <div className='bottomCardPrice'>
        {DataOnHold ? (
          <Skeleton variant="rectangular" width={"80%"} height={20} />
          ) : (
          <span className="priceName">${item.price}</span>
        )}        
        {DataOnHold ? null : (
          <Button
            size="small"
            className="addToCart"
            onClick={() => addProduct(item)}
          >
            Add To cart
          </Button>
        )}
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
