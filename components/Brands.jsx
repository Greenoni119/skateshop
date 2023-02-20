
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from '../pages/data/data';


const Brands = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };

  return (
    <div className="max-screen-w-xl pt-20 m-20">
        <h1 className='text-4xl text-center p-20'> Brands we work with </h1>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="bg-white">
            <div className="">
           
              <img className='w-90 h-72 mx-auto'
                src={
                  item.linkImg
                }
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default Brands