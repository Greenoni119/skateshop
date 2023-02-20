import React from 'react'
import Products from '../pages/data/data';
import Link from 'next/Link';
const womens_shoes = () => {
  return (
    <div>
<div className='bg-white'>
        <div className='flex pl-5 max-w-screen-2xl mx-auto'>
          <Link href='/women'>
          <h1 className=' text-3xl'>Clothes</h1> 
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/womens_shoes'>
          <h1 className=' text-3xl text-red-600 pr-2'>Shoes</h1> 
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/womens_swimware'>
          <h1 className=' text-3xl'>Swim Ware</h1>  
          </Link>
          </div>
    </div>
<div className='flex items-center justify-center pt-40'>
        <div className=' grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {Products.slice(106,121).map((values)=>{
                  const { id, title, price, image}= values;
                  return(
                    <>
                    <div className=' card-body group relative items-center justify-center overflow-hidden cursor-pointer bg-white' key={id}>
                        <div className=' h-96 w-72'>
                             <img className='h-full w-full object-cover rounded-b-2xl' src={image}/>
                        </div>
                        <h5>{title}</h5>
                        <p className='text-black text-center text-xl p-3'> {price}</p>
                        <button href='' className='btn btn-dark text-white text-center text-3xl p-3 bg-black hover:bg-white hover:text-red-600 duration-200 '>buy now</button>
                    </div>   
                    
                    </>
                  )
                })}
               
                
                                
                </div>
                
            </div>




    </div>
  )
}

export default womens_shoes