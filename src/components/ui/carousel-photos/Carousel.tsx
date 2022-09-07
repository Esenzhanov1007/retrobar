import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "./Carousel.scss"
import "swiper/css";
import "swiper/css/navigation";


import {PlaceData} from "../../../types/types";


const Carousel = ({data, setCount}: {data: PlaceData, setCount?: React.Dispatch<React.SetStateAction<number>>}) => {



    return (
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="photosSwiper"
                onActiveIndexChange={e => setCount && setCount(e.activeIndex + 1)}
                slidesPerView={1}
            >
                {data.photos.map((photo, i) => <SwiperSlide key={i}>
                    <img className="image" src={photo} alt=""/>
                </SwiperSlide>)}
            </Swiper>
    );
};

export default Carousel;