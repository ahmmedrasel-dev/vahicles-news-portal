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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper w-full md:h-[450px]"
      >
      {
        newsimages.map(item => <SwiperSlide key={item.id} className='relative w-full flex justify-center items-center'>
        <div>
            <Image src={item.image_path} width={1000} height={400} placeholder='blur' quality={80} className='w-full object-cover' alt={item.caption} />
            <div className='absolute md:bottom-12 bottom-12 left-10 bg-black opacity-60 p-4 z-10'>
              <p className='md:text-4xl text-md md:font-black font-bold md:w-[1000px] text-white leading-[1.5rem] md:leading-[4rem] z-20 mb-3'>{item.caption}</p>
            </div>
        </div>

        
      </SwiperSlide>)
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