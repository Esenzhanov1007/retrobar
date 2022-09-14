import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "./Carousel.scss"
import "swiper/css";
import "swiper/css/navigation";


import { PhotoEvent } from '../../../types/types';

const Carousel = ({data, setCount}: {data: PhotoEvent, setCount?: React.Dispatch<React.SetStateAction<number>>}) => {

    return (
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="photosSwiper"
                onActiveIndexChange={e => setCount && setCount(e.activeIndex + 1)}
                slidesPerView={1}
            >
                {data.eventphotos.map((photo, i) => <SwiperSlide key={i}>
                    <img className="image" src={photo} alt=""/>
                </SwiperSlide>)}
            </Swiper>
    );
};

export default Carousel;