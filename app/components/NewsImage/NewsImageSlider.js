"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination,Autoplay } from 'swiper/modules';

const NewsImageSlider = ({newsimages}) => {
  return (
    <>
          <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper w-full md:h-[450px]"
      >
      {
        newsimages.map(item => <SwiperSlide key={item.id} className='relative w-full flex justify-center items-center'>
        <div className='relative'>
          <Image src={item.image_path} width={1000} height={400} placeholder='blur' quality={80} className='w-full object-cover' alt={item.caption} />
          <div className='absolute max-w-7xl md:top-[30%] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-black opacity-60 md:p-4 p-2'>
            <p className='md:text-4xl text-md md:font-black font-bold text-white leading-[1.5rem] md:leading-[4rem]'>{item.caption}</p>
          </div>
        </div>
      </SwiperSlide>
      )
      }
      
      </Swiper>

      <style jsx global>
        {`
          .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            background-color: #fff;
            opacity: .7;
            margin: 0 5px;
            transition: background-color 0.3s ease;
            border-radius: 0;
          }

          .swiper-pagination-bullet-active {
            background-color: #000;
            opacity: 1; 
          }
        `}
      </style>

    </>
  )
}

export default NewsImageSlider