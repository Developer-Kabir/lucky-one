import React from 'react';
import './Cart.css'

const Cart = ({ carts, chooseAgain, chooseOne }) => {
 
    return (
        <div className='cart-data'>
            <h2 className='cart-heading'>Cart</h2>
                    <hr />
                    {
                        carts.map(cart => {
                            return (
                                <div className='cart-item' key={cart._id}>
                                    <p>{cart.name}</p>
                                </div>
                            )
                        })
                    }
                    
                  <div className='update-cart'>
                    <button onClick={() => chooseOne(carts)} className='chose-btn' >Choose one for me</button>
                    <button onClick={chooseAgain} className='chose-btn'>Choose Again </button>
                  </div>
        </div>
    );
};

export default Cart;


