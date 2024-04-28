import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './homegalleryswiper.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import sirImage1 from "./a.jpg"
import sirImage2 from "./abcde.jpg"
import sirImage3 from "./banner-image.webp"
import image1 from "./image1.png"
import image2 from './image2.png'
import image4 from './image4.png'
export default function HomeGallerySwiper() {

  const handleRe = ()=>{
    const url = "https://ngoguru.org"
                const link = document.createElement('a');
                link.href = url;
                // link.download = fileName;
                link.target = url
        
                document.body.appendChild(link);
        
                link.click();
        
                link.parentNode.removeChild(link);

  }



  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // Pagination,
        modules={[ Autoplay]}
        className="myHomeGallerySwiper"
      >
        <SwiperSlide className='myHomeGallerySwiperSlider'>
            {/* <h1 className='abc'>Slide 1</h1> */}
            <div className='myHomeGallerySwiperSlider-content' style={{backgroundImage:`url(${image1})`}}>
              <button onClick={()=>{handleRe() }}>Click here for more information</button>
            </div>
            {/* <img src={image1} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='myHomeGallerySwiperSlider'>
        <div className='myHomeGallerySwiperSlider-content' style={{backgroundImage:`url(${image2})`}}>
        <button onClick={()=>{handleRe() }}>Click here for more information</button> </div>
        {/* <h1 className='abc'>Slide 1</h1> */}
        {/* <img src={image2} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='myHomeGallerySwiperSlider'>
        <div className='myHomeGallerySwiperSlider-content' style={{backgroundImage:`url(${image4})`}}>
        <button onClick={()=>{handleRe() }}>Click here for more information</button>
        </div>
        {/* <h1 className='abc'>Slide 1</h1> */}
        {/* <img src={image4} alt="" /> */}
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

