import React from 'react'
import Image from 'next/image';
import treflip from '../public/treflip.jpg';
import tripod from '../public/tripod.jpg';
import Scooter from '../public/scooter-thumb.jpg'
import Link from 'next/Link'
const Categories = () => {
  return (
<div className=' max-w-screen-2xl mx-auto'>
    <div className='max-screen-w-xl flex items-center justify-center'>
        <div className='grid grid-cols-3'>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                <div className='h-full w-full'>
                <Image className='categories h-full w-full object cover' src={treflip}/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  '></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center'>
                  <Link href='/skate'>
                    <h1 className='text-white text-7xl border-white border-8 rounded-xl p-7 hover:p-3 hover:rounded-5xl hover:text-5xl duration-150 hover:text-red-600 hover:border-red-600'>Skate</h1>
                    </Link>
                </div>
            </div>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                <div className='h-full w-full'>
                <Image className='categories h-full w-full object cover' src={tripod}/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black '></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center'>
                    <Link href='/snow'>
                    <h1 className='text-white text-7xl border-white border-8 rounded-xl p-7 hover:p-3 hover:rounded-5xl hover:text-5xl duration-150 hover:text-red-600 hover:border-red-600'>Snow</h1>
                    </Link>
                </div>
            </div>
            <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                <div className=' h-full w-full'>
                <Image className='categories h-full w-full object cover' src={Scooter}/>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black '></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center'>
                    <Link href='/scooter'>
                    <h1 className='text-white text-6xl border-white border-8 rounded-xl p-7 hover:p-3 hover:rounded-5xl hover:text-5xl duration-150 hover:text-red-600 hover:border-red-600'>Scooter</h1>
                    </Link>
                </div>
            </div>
           
        </div>
    </div>
    <h1 className='text-center text-5xl p-5'>WE STAND BEHIND THE SKATE COMMUNITY IN BRENTWOOD, CA AND BEYOND </h1>
    <div className='h-15 w-full bg-black'>.</div>
</div>
  )
}

export default Categories