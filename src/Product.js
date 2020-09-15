import React from 'react'
import './Product.css'
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
function Product({id,title,price,rating,image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p classname="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <div>
                    <img  className="product__img" src={image}></img>
                </div>
                <button className="btn">Add to Basket</button>
            </div>
        </div>
    )
}
export default Product
