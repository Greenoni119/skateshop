import React, { useState } from 'react';
import items from '../pages/data/data';
import Link from 'next/Link';
import addToCart from './CommonAncestor'
const Skate = ({onClick}) => {

  return (
    <div className=''>
      <div className='bg-white'>
        <div className='flex pl-5 max-w-screen-2xl mx-auto'>
          <Link href='/skate'>
            <h1 className=' text-3xl text-red-600 pr-2'>Decks</h1>
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/skate_griptape'>
            <h1 className=' text-3xl'>Griptape</h1>
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/skate_trucks'>
            <h1 className=' text-3xl'>Trucks</h1>
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/skate_wheels'>
            <h1 className=' text-3xl'>Wheels</h1>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center pt-40'>
        <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.slice(135, 154).map((item) => {
            const { id, title, price, image } = item;
            return (
              <>
                <div
                  className='card-body group relative items-center justify-center overflow-hidden cursor-pointer bg-white'
                  key={id}
                >
                  <div className='h-96 w-72'>
                    <Link href={'/data/'} key={item.id}>
                      <img
                        className='h-full w-full object-cover rounded-b-2xl'
                        src={item.image} />
                    </Link>
                  </div>
                  <h5>{title}</h5>
                  <p className='text-black text-center text-xl p-3'>
                    {price}
                  </p>
                  <button
                    className='btn btn-dark text-white text-center text-3xl p-3 bg-black hover:bg-white hover:text-red-600 duration-200'
                    onClick={() => addToCart(item)}
                  >
                    buy now
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skate


{/*



<div className='flex items-center justify-center pt-40'>
        <div className=' grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {items.slice(135,154).map((values)=>{
                  const { id, title, price, image}= values;
                  return(
                    <>
                    <div className=' card-body group relative items-center justify-center overflow-hidden cursor-pointer bg-white' key={id}>
                        <div className=' h-96 w-72'>
                            <Link href={'/data/'} key={items.id}>
                             <img className='h-full w-full object-cover rounded-b-2xl' src={image}/>
                             </Link>
                        </div>
                        <h5>{title}</h5>
                        <p className='text-black text-center text-xl p-3'> {price}</p>
                        <button href='' className='btn btn-dark text-white text-center text-3xl p-3 bg-black hover:bg-white hover:text-red-600 duration-200' >buy now</button>
                    </div>   
                    
                    </>
                  )
                })}             
                </div>
                
            </div>





( cart)

const Cart = () => {
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
  );
}

*/}