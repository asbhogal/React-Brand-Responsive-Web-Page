import { useRef, useEffect } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import data from "../js/data";

register();

const TestimonialsSlider = () => {

    const swiperElRef = useRef(null);

    /* const swiperParams = {
        slidesPerView: 1,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        on: {
          init() {
          },
        },
      };

      Object.assign(swiperEl, swiperParams);

  swiperEl.initialize(); */

    useEffect(() => {
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={ swiperElRef }
            slides-per-view="3"
            spaceBetween="300"
            slidesPerView="3"
            width="36"
        >
            { data.map(user => (
                <swiper-slide class="TestimonialCard" key={ user.id }>
                    <>
                        <p class="TestimonialQuote">{ user.description }</p>
                        <img class="TestimonialImage "src={ require(`/src/assets/images/Testimonial-Image-${ user.img }`) }></img>
                        <p class="TestimonialName">{ user.name }</p>
                        <div class="TestimonialBottomSection">
                            <p class="TestimonialTitle">{ user.title }</p>
                            <div class="SocialIcons">
                                <img src={ require(`/src/assets/logos/${ user.socialIcons.facebookIcon }`) }></img>
                                <img src={ require(`/src/assets/logos/${ user.socialIcons.twitterIcon }`) }></img>
                            </div>
                        </div>
                    </>
                </swiper-slide>
            )) }
            <swiper-pagination></swiper-pagination>
        </swiper-container>
    )
};

export default TestimonialsSlider;