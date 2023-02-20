/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { handMadeBoards } from '../pages/data/data';
const Boards = () => {
  return (
    <div>
        <h1 className='text-8xl text-red-600 text-center pt-6'>
            FOR SKATERS BY SKATERS
        </h1>
        <p className='text-2xl text-red-600 text-center mt-10 ml-20 mr-20'>
        We are a small, Veteran Owned Skateboard Company from <br />
Northern California where our decks are locally hand crafted. 
When you buy our Skateboards and Merchandise, you help us Keep Kids Skateboarding.
        </p>
        
                <div className='flex items-center justify-center pt-40'>
                
                    <div className=' grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {handMadeBoards.map((handMadeBoards) => (
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer bg-white'>
                            <div className='h-96 w-72'>
                                 <img className='h-full w-full object-cover rounded-b-2xl' src={handMadeBoards.image}/>
                            </div>
                            <p className='text-black text-center text-xl p-3'> {handMadeBoards.name}<br /> {handMadeBoards.price}</p>
                            <p className='text-white text-center text-3xl p-3 bg-black hover:bg-white hover:text-red-600 duration-200 '> view</p>
                        </div>  
                             ))}                
                    </div>
                    
                </div>
        
    </div>
  )
}

export default Boards
