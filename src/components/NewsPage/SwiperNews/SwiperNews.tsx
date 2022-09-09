import React from 'react';
import './SwiperNews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const SwiperNews = () => {

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="newsSwiper"
            >
                <SwiperSlide className="newsSwiper__slide-container">

                </SwiperSlide>
                <SwiperSlide className="newsSwiper__slide-container">

                </SwiperSlide>
                <SwiperSlide className="newsSwiper__slide-container">

                </SwiperSlide>
                <SwiperSlide className="newsSwiper__slide-container">

                </SwiperSlide>
                <SwiperSlide className="newsSwiper__slide-container">

                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default SwiperNews;