import React from 'react'
import Products from '../pages/data/data';
import Link from 'next/Link';
const snow = () => {
  return (
    <div>
<div className='bg-white'>
        <div className='flex pl-5 max-w-screen-2xl mx-auto'>
          <Link href='/snow'>
          <h1 className=' text-3xl text-red-600 pr-2'>Boards</h1> 
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/snow_gloves'>
          <h1 className=' text-3xl'>Gloves</h1> 
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/snow_goggles'>
          <h1 className=' text-3xl'>Goggles</h1>  
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/snow_jackets'>
          <h1 className=' text-3xl'>Jackets</h1>
          </Link>
          <span className='text-3xl pl-3 pr-3'>-</span>
          <Link href='/snow_pants'>
          <h1 className=' text-3xl'>Pants</h1>
          </Link>
          </div>
    </div>
<div className='flex items-center justify-center pt-40'>
        <div className=' grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {Products.slice(181,196).map((values)=>{
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

export default snow