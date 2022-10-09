import React from 'react';
import "./Product.css";
const Product = () => {
    return (
    <div class="product">
        <div class="product__info">     
        <p>The lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
        <p>🌟</p>
        <p>🌟</p>
            </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/4115X1qmeoL._SX425_.jpg" alt="null" />

<button>Add to Basket</button>
    </div>
    );
}

export default Product;
