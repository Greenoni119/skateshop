import React from 'react'
import Image from 'next/image';
import BNM from '../public/daCrew.jpg'
import Reviews from '../components/Reviews'
const Contact = () => {
  return (
    <div className='pt-10'>
            <div className=''>
            <Image src={BNM} className='mx-auto pb-10' />
            <div className='max-w-screen-2xl mx-auto'>

              <div className=''>
                    <form action='https://getform.io/f/c73b689e-c58f-4644-877c-e2c79096ae99' method='POST' className=' mx-auto flex flex-col w-full md:w-1/2'>
                      <input type="text" name='Name' placeholder='Enter your name'className='p-2 bg-transparent border-4 border-black text-red-500 focus:outline-none' />
                      <input type="text" name='Email' placeholder='Enter your Email'className=' my-4 p-2 p-2 bg-transparent border-4 border-black text-red-500 focus:outline-none' />
                      <textarea name="Message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-4 border-black text-red-500 focus:outline-none'>
                      </textarea>
                      <button className='text-white text-2xl bg-transparent border-4 border-red-600 bg-red-600 my-8 py-2 px-10 mx-auto flex items-center hover:scale-110 duration-200'>Send</button>
                    </form>
              </div>

             <div>
             <h1 className='text-3xl text-center text-red-600 pb-2 pt-20'> Come Visit Us! </h1>
             <h1> <address className='text-3xl text-center'> 123 st, Brentwood, CA 94513</address></h1>
             <ul className='m-10 flex space-x-7 justify-center pt-5 text-center'>
                <li className='text-2xl pb-5'><h1>Monday</h1> 11am-7pm</li>
                <li className='text-2xl pb-5'><h1>Tuesday</h1> 11am-7pm</li>
                <li className='text-2xl pb-5'><h1>Wednsday</h1> 11am-7pm</li>
                <li className='text-2xl pb-5'><h1>Thurday</h1> 11am-7pm</li>
                <li className='text-2xl pb-5'><h1>Friday</h1> 11am-9pm</li>
                <li className='text-2xl pb-5 '> <h1>Saturday</h1>11pm-9pm</li>
                <li className='text-2xl pb-5 text-red-600'> <h1>Sunday</h1> CLOSED</li>
              </ul>
             </div>
 

              </div>
            </div>
      <Reviews/>

    </div>
  )
}

export default Contact