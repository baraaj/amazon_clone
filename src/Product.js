import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
const Product = ({title,image,price,rating,id}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    console.log("basket",basket)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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

<button onClick={addToBasket}>Add to Basket</button>
    </div>
    );
}

export default Product;
