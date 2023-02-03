import { useRef, useEffect } from "react";
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
            navigation="true"
            pagination="true"
        >
            <swiper-slide>
                <h1>Test</h1>
                <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
            </swiper-slide>
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 1</swiper-slide>
        </swiper-container>
    )
};

export default TestimonialsSlider;