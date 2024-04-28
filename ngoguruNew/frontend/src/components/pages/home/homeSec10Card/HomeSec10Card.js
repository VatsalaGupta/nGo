import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './homesec10card.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import homeSec10CardImage from "./homeSec10CardImage.jpg"

export default function HomeSec10Card() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      loop={true}
        modules={[Autoplay]}
        className="myHomeSec10CardSwiper"
      >
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='myHomeSec10CardSwiper-Slider'>
            <div className='myHomeSec10CardSwiper-Slider-content'>
                <div className='myHomeSec10CardSwiper-Slider-content-1' style={{backgroundImage:`url(${homeSec10CardImage})`}}>
                    <button>Feb 06,2023</button>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-2'>
                    <h2>Its like a kind of torture to have to watch the show</h2>
                </div>
                <div className='myHomeSec10CardSwiper-Slider-content-3'>
                    <h4>READ MORE</h4>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
