import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import { useState } from "react";
import Image from 'next/image';
import logo from '../public/BOARDS N MORE OFFICIAL.png';
import Link from 'next/Link';
const NavBar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div>
      
    <div>

     <Link href='/Cart'>
    <BsCart3 className='float-right m-5 text-3xl cursor-pointer'/>
    </Link>

      <Link href='/'>
       <Image src={logo} className='mx-auto clear-right'/>
       </Link>
    </div>
    <div className=' px-4 flex justify-between items-center w-full h-20'>
    <div>
    </div>
    <ul className='gap-10 hidden lg:flex mx-auto'>
        <Link href='/men'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Men</li>
        </Link>
        <Link href='/women'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Women</li>
        </Link>
        <Link href='/accessories'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Accessories</li>
        </Link>
        <Link href='/contact'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'> Contact</li>
        </Link>
       
        <input className='border border-black pl-3' type="text" placeholder='search' />
    </ul>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-amber-100 lg:hidden hover:scale-110 duration-200 hover:text-neutral-500 dark:text-cyan-500 dark:hover:text-white'>

        { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }

      </div>

    { nav && (
        <ul className='gap-20 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-stone-600 text-amber-100 dark:bg-purple-900'>
         <Link href='/men'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Men</li>
        </Link>
        <Link href='/Women'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Women</li>
        </Link>
        <Link href='/Kids'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Kids</li>
        </Link>
        <Link href='/accessories'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'>Accessories</li>
        </Link>
        <Link href='/contact'>
        <li className='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'> Contact</li>
        </Link><li classname='text-2xl cursor-pointer text-black hover:text-red-700 transition duration-200'> Contact </li>
        </ul>
              )}         
    </div>
    <div className='h-15 w-full bg-black'>
 <p className='text-white text-center p-2'> 30% off all snowboarding gear </p>
    </div>
</div>

  )
}

export default NavBar