import React from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation} from "swiper";
import './CarouselVideos.scss'
import {ReportVideo} from "../../../types/types";
import VideoReport from "../../Video/VideoReport/VideoReport";
import convertedDate from '../../../utilits/utils';



const CarouselVideos = ({videoReports}: { videoReports: ReportVideo[] }) => {



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
                    loop={true}
                >
                    {videoReports.map(video => (
                        <SwiperSlide>
                            <VideoReport/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CarouselVideos;