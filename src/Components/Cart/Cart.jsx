import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    // use 6 or 8-12 any code of them but it shows same result for addition
    // let total = 0;
    // for(let i = 0; i<cart.length; i++){
    //     const product = cart[i];
    //     total = total+product.price;
    // }

    // add shipping cost 
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }

    // tax 
    const tax = total/10;
    return (
        <div className='cartCSS'>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {total + shipping + tax}</p>
        </div>
    );
};

export default Cart;