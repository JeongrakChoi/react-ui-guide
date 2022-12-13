import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react';

const SlickSlide = () => {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container">
            
            <div className="sliderWrap">
                <Slider {...settings}>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                    <div>
                        <img src="http://placeimg.com/830/480/any"/>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default SlickSlide;