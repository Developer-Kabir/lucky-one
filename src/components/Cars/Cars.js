import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Qna from '../Qna/Qna';
import './Cars.css'

const Cars = () => {

    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('car.json')
        .then(res => res.json())
        .then( data => setCars(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2 className='heading'>Kabir's Car Shop Bd</h2>
                <div className='products'>
                {
                    cars.map( car => <Car
                    key={car.id}
                    car = {car}
                    ></Car>)
                }
                </div>
                <Qna></Qna>
            </div>
            <div className='cart-container'>
                <div className='cart-data'>
                    <h2 className='cart-heading'>Cart</h2>
                    <hr />
                  <div className='update-cart'>
                    <button className='chose-btn'>Choose one for me</button>
                    <button className='chose-btn'>Choose Again </button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;