import React from 'react';
import './Product.css';

import '../../../node_modules/remixicon/fonts/remixicon.css';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt={name} />
            </div>
            <div className='prod_details'>
                <h2>{name}</h2>
                <br /> <br />
                <p><small>by {seller}</small></p> <br />
                <p>${price}</p> <br />
                <p><small>Only {stock} left in stock - Order soon</small></p> <br />
                <button onClick={() =>  props.handleAddProduct(props.product)}><i class="ri-shopping-cart-2-line"></i> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;