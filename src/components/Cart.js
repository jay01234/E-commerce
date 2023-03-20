import React from 'react';
import {addToCart, removeToCart} from '../redux/action/index'
import { useSelector, useDispatch } from 'react-redux';
import OrderSummary from './OrderSummary';
import './Product.css'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleAdd = (item) => {
        dispatch(addToCart(item))
    }
    const handleRemove = (item) => {
        dispatch(removeToCart(item))
    }
    const cartItems = (items) => {
        return (
            <tr key={items.id}>
                <td>{items.brand}</td>
                <td>
                    <button onClick={() => handleRemove(items)}>-</button>
                    {" "}{items.qty}{" "}
                    <button onClick={() => handleAdd(items)}>+</button>
                </td>
                <td>{items.qty > 1 ? ('$' + (items.qty) * (items.price)) : '$' + (items.price)}</td>
            </tr>
        )
    }

    return (
        <div>
            { state.length !== 0 ?
            <table>
                <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
                {state.length !== 0 && state.map((cartItems))}
            </table> : <p className='emptyCart'>Your cart is Empty</p> }
            <OrderSummary />
        </div>
    )
}

export default Cart;
