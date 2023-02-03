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
            pagination="true"
            loop="true"
            slidesPerView="3"
        >
            <swiper-pagination></swiper-pagination>
            { data.map(user => (
                <swiper-slide key={ user.id }>
                    <>
                        { user.description }
                        <br></br>
                        <img src={ require(`/src/assets/images/Testimonial-Image-${ user.img }`) }></img>
                        <br></br>
                        { user.name }
                        <br></br>
                        { user.title }
                        <br></br>
                        <img src={ require(`/src/assets/logos/${ user.socialIcons.facebookIcon }`) }></img>
                        <img src={ require(`/src/assets/logos/${ user.socialIcons.twitterIcon }`) }></img>
                    </>
                </swiper-slide>
            )) }
        </swiper-container>
    )
};

export default TestimonialsSlider;