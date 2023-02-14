import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import data from "../js/data";

const TestimonialSlider = () => {
    return (
        <Swiper
            modules={[Autoplay, FreeMode, Pagination, A11y]}
            spaceBetween={ 50 }
            pagination={{ clickable: true }}
            autoplay={ true }
            loop={ true }
            freeMode={ true }

            breakpoints = {{
                1440: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 3
                },
                744: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                375: {
                    slidesPerView: 1
                }
            }}
        >

        { data.map(user => (
            <SwiperSlide className="TestimonialCard" key={ user.id }>
                <div>
                    <p className="TestimonialQuote">{ user.description }</p>
                    <img className="TestimonialImage" src={ require(`/src/assets/images/Testimonial-Image-${ user.img }`) }></img>
                    <p className="TestimonialName">{ user.name }</p>
                    <div className="TestimonialBottomSection">
                        <p className="TestimonialTitle">{ user.title }</p>
                        <div className="SocialIcons">
                            <img src={ require(`/src/assets/logos/${ user.socialIcons.facebookIcon }`) }></img>
                            <img src={ require(`/src/assets/logos/${ user.socialIcons.twitterIcon }`) }></img>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )) }
        </Swiper>
    );
  };

export default TestimonialSlider;