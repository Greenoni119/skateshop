import React, { useState } from 'react';
import items from '../pages/data/data';
import Skate from './Skate';
import Cart from './Cart';

const CommonAncestor = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Skate addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default CommonAncestor;