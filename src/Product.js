import React from 'react';
import "./Product.css";
const Product = ({title,image,price,rating}) => {
   
    return (
    <div class="product">
        <div class="product__info">     
        <p> {title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_id,i)=>( <span>🌟</span>))}
          
        </div>
        </div>
        <img src={image} alt="null" />

<button>Add to Basket</button>
    </div>
    );
}

export default Product;
