// import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from './../Products/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return ( 
        <div className='shop_container'>
            <div className="product_container">
            
                {
                    products.map(pd=> <Product product={ pd } handleAddProduct={handleAddProduct}></Product>)
                }
                
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;