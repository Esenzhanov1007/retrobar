import frame2 from "../../../assets/icons/barslider/frame2.png"
import bg1 from "../../../assets/icons/barslider/bg1.png"
import bg2 from "../../../assets/icons/barslider/bg2.png"
import bg3 from "../../../assets/icons/barslider/bg3.png"
import bg4 from "../../../assets/icons/barslider/bg4.png"
import clock from "../../../assets/icons/barslider/clock.svg"
import geotag from "../../../assets/icons/barslider/geotag.svg"
import phone from "../../../assets/icons/barslider/phone.svg"

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './BarSlider.module.scss';
import frame from "../../../assets/icons/slider/frame.png";
import React from "react";
import './BarSlider.css'




const BarSlider = () => {

    const data = [
        {
            firstImg: bg1,
            secondImg: bg3,
            clock: clock,
            geotag: geotag,
            phone: phone,
            title: "МЯТА LOUNGE",
            time: '12:00-04:00',
            phoneNumber: '0 770 00 28 54',
            address: 'Токтогула, 108, 10 этаж'
        },
        {
            firstImg: bg1,
            secondImg: bg2,
            clock: clock,
            geotag: geotag,
            phone: phone,
            title: "MINIBAR",
            time: '18:00-06:00',
            phoneNumber: '0 558 55 00 00',
            address: 'Чынгыза Айтматова, 56'
        },
        {
            firstImg: bg1,
            secondImg: bg4,
            clock: clock,
            geotag: geotag,
            phone: phone,
            title: "TIMES BAR",
            time: '12:00-05:00',
            phoneNumber: '0 770 03 18 55',
            address: 'Орозбекова, 32'
        }
    ]


    return (
        <div className={styles.swiper_parent}>
            <h3 className={styles.swiper_parent_title}>Топ заведений</h3>
            <Swiper
                loop={true}
                initialSlide={1}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={
                    window.innerWidth <= 1510 ? 2 : window.innerWidth <= 1000 ? 2 : 3
                }
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="ourSwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slider__wrapper}>
                                <img className={styles.barslider__frame} src={frame2} alt=""/>
                                <img className={styles.barslider__bg} src={item.secondImg} alt=""/>
                                <div className={styles.barslider__about}>
                                    <div className={styles.barslider__about__bgi}>
                                        <h6 className={styles.barslider__about__title}>{item.title}</h6>
                                        <div className={styles.barslider__about__time}>
                                            <img src={clock} alt=""/>
                                            <p>{item.time}</p>
                                        </div>
                                        <div className={styles.barslider__about__phone}>
                                            <img src={phone} alt=""/>
                                            <a href="tel:+996558550000">{item.phoneNumber}</a>
                                        </div>
                                        <div className={styles.barslider__about__geotag}>
                                            <img src={geotag} alt=""/>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default BarSlider;