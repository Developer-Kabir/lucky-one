import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
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
            <div className='products'>
            {
                cars.map( car => <Car
                key={car.id}
                car = {car}
                ></Car>)
            }
            </div>
            <div className='cart-container'>
                
            </div>
        </div>
    );
};

export default Cars;