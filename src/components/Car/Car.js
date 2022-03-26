import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Car.css'


const Car = ({car, addToCart}) => {
    const {name, Price, picture} = car;
    return (
        <div className='product'>
                        <div className='product-img'>
                            <img className='img-fluid' src={picture} alt="" />
                        </div>
                        <div className='product-info'>
                            <h4>{name}</h4>
                            <h5>Price : $ {Price}</h5>
                        </div>
                        <button onClick={() => addToCart(car)}className='cart-btn'>
                            <p>Add to Cart</p>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
        </div>
    );
};

export default Car;