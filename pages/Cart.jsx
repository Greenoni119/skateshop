import React, { useState } from 'react';


const Cart = ({cart}) => {

  const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    }
  return (
    <div className="cart">
    <h3>Cart</h3>
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  )
}

export default Cart
