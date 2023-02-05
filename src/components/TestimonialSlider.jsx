import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from "../js/data";

const TestimonialSlider = () => {
    return (
      <Swiper
        className="TestimonialSlider"
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={ true }
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        { data.map(user => (
                <SwiperSlide className="TestimonialCard" key={ user.id }>
                    <p className="TestimonialQuote">{ user.description }</p>
                    <img className="TestimonialImage "src={ require(`/src/assets/images/Testimonial-Image-${ user.img }`) }></img>
                    <p className="TestimonialName">{ user.name }</p>
                    <div className="TestimonialBottomSection">
                        <p className="TestimonialTitle">{ user.title }</p>
                        <div className="SocialIcons">
                            <img src={ require(`/src/assets/logos/${ user.socialIcons.facebookIcon }`) }></img>
                            <img src={ require(`/src/assets/logos/${ user.socialIcons.twitterIcon }`) }></img>
                        </div>
                    </div>
                </SwiperSlide>
            )) }
      </Swiper>
    );
  };

export default TestimonialSlider;