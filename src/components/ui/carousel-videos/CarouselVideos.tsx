import React from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation} from "swiper";
import './CarouselVideos.scss'
import { convertedDate } from '../../../utilits/utils';
import VideoReport from '../../Video/VideoReport/VideoReport';

const CarouselVideos = ({videoReports}: { videoReports: any }) => {
    return (
        <>
            <div>
                <h3 className="title">{convertedDate(videoReports[0].date)}</h3>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    className="videosSwiper"
                    slidesPerView={5}
                    spaceBetween={30}
                >
                    {videoReports.map((item: any) => (
                        <SwiperSlide>
                            <VideoReport videoReport={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CarouselVideos;