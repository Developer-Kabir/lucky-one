import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name, Price, picture} = props.car;
    return (
        <div className='product'>
                        <div className='product-img'>
                            <img className='img-fluid' src={picture} alt="" />
                        </div>
                        <div className='product-info'>
                            <h2> Name : {name}</h2>
                            <h3>Price : {Price}</h3>
                        </div>
        </div>
    );
};

export default Car;