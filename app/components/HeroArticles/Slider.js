"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination,Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Slider = ({leadNews}) => {
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
        leadNews.map(item => <SwiperSlide key={item.id} className='relative w-full flex justify-center items-center'>
        <div className="">
            <Image src={item.thumbnail} width={1200} height={400} className='w-full object-cover' alt='Slider 1' />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='absolute md:top-24 top-10 left-10'>
              <p className='md:text-5xl text-md md:font-black font-bold md:w-[1000px] text-white leading-[1.5rem] md:leading-[4rem] z-10 mb-3'>{item.title}</p>
              <Link href={`articles/${item.slug}`}><button className="bg-white text-black md:py-2 py-1 md:px-4 px-2 rounded-lg shadow-lg">Read More</button></Link>
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

export default Slider