import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineLine} from "react-icons/ai"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './aboutgalleryswiper.css'
import image1 from "../a.jpg"
import image2 from "./image2.JPG"
import image3 from "./image3.JPG"
import image4 from "./image4.JPG"
import image5 from "./image5.JPG"


// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import {BsArrowRight} from "react-icons/bs"
// import ngoRegIcon from "./ngoRegIcon.jpg"
// import projectsHomeIcon from "./projectsHomeIcon.jpg"
// import fundingIcon from "./fundingIcon.png" 
// import nsdcFundingIcon from "./nsdcFundingIcon.png"
// import incomTaxApprovalIcon from "./incomeTaxApprovedIcon.png"

export default function AboutGallerySwiper(props) {
  return (
    <div className='about-gal'>
        <div className='about-gal-head'>
        <h1>Our Gallery </h1>

        </div>
        
      <Swiper
        slidesPerView={props.noOfSlides}

        loop={true}
        spaceBetween={20}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="myAboutGallerySwiper"
      >
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='myAboutGallerySwiperSlider'>
                <img src={image5} alt="" />
        </SwiperSlide>
        
    </Swiper>
    </div>
  );
}