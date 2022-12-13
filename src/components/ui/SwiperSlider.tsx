import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Navigation } from 'swiper';

import { useEffect, useState } from 'react';

const SwiperSlider = () => {

    SwiperCore.use([Navigation]);

    const settings = {
        navigation: true,
        pagination: true,
        loop:true
    }

    return (
        <div className="container">
            
            <div className="sliderWrap">
                <Swiper {...settings}>
                    <SwiperSlide><img src="http://placeimg.com/830/480/any"/></SwiperSlide>
                    <SwiperSlide><img src="http://placeimg.com/830/480/any"/></SwiperSlide>
                    <SwiperSlide><img src="http://placeimg.com/830/480/any"/></SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default SwiperSlider;