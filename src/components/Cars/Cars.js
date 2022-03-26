import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import Qna from '../Qna/Qna';
import './Cars.css'

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('car.json')
        .then(res => res.json())
        .then( data => setCars(data))
    }, [])

    const addToCart = (car) => {
        const duplicateProduct = cart.find(p => p === car)
        const cartLength = [...cart, car].length;
        // console.log(cartLength)
        if (duplicateProduct) {
            alert(`You can not add a product twice in the cart!!!`)
        }

        else if (cartLength > 4) {
            alert("4 items already selected");
        }

        else {
            const cartItems = [...cart, car]
            setCart(cartItems);
        }

    }

    const chooseOne = (selectedCarts) => {
        const totalCartItems = selectedCarts.length;
        if (totalCartItems < 2) {
            alert("Please add minimum 2 items to choose 1 randomly")
        }
        else {
            const index = Math.floor(Math.random() * totalCartItems);
            const luckyCart = selectedCarts[index]
            setCart([luckyCart]);
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2 className='heading'>Kabir's Car Shop</h2>
                <div className='products'>
                {
                    cars.map( car => <Car
                    key={car.id}
                    car = {car}
                    addToCart={addToCart}
                    ></Car>)
                }
                </div>


                <Qna></Qna>
            </div>
            <div className='cart-container'>
                <Cart carts={cart} chooseAgain={chooseAgain} chooseOne={chooseOne}></Cart>
            </div>
        </div>
    );
};

export default Cars;


