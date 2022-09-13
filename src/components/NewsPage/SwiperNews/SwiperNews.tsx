import React from 'react';
import './SwiperNews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import InformationArtist from '../InformationArtistBlock/InformationArtist';

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
                centeredSlides={true}
            >
                <SwiperSlide className="newsSwiper__slide-container">
                    <InformationArtist/>
                </SwiperSlide>
                <SwiperSlide className="newsSwiper__slide-container">
                    <InformationArtist/>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default SwiperNews;