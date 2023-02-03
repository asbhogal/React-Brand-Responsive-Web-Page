import { useRef, useEffect } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import data from "../js/data";

console.log(data);

const TestimonialsSlider = () => {
    const swiperElRef = useRef(null);

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
        >
            { data.map(user => (
                <swiper-slide class="TestimonialCard" key={ user.id }>
                    <>
                        <p>{ user.description }</p>
                        <br></br>
                        <img class="TestimonialImage "src={ require(`/src/assets/images/Testimonial-Image-${ user.img }`) }></img>
                        <br></br>
                        <p>{ user.name }</p>
                        <br></br>
                        <div class="TestimonialBottomSection">
                            <p>{ user.title }</p>
                            <div>
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