import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { googleReviews } from '../pages/data/data';
import { BsStarFill,BsStarHalf, BsStar} from 'react-icons/bs'

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div>
    <div className="max-screen-w-xl pt-20 m-20">
    <h1 className='text-5xl text-center p-20'> <span className='text-blue-400'>Our</span>  <span className='text-yellow-400'>Google</span>   <span className='text-red-500'>Reviews </span> </h1>
  <Slider {...settings}>
    {googleReviews.map((item) => (
      <div className="">

        <div className="">
          <img className='w-60 h-60 p-5 rounded-full mx-auto'src={item.linkImg}/>
         
          <h1 className='text-center'>{item.name}</h1>
         <div className='flex justify-center text-yellow-400'> 
         <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/>
         </div>
         <p className=' p-5 text-center'>{item.review}</p>
        </div>

      </div>
    ))}
  </Slider>
</div>
</div>
  )
}

export default Reviews