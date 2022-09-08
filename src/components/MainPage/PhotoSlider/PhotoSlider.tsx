import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import photo1 from '../../../assets/icons/slider/photo1.png'
import photo2 from '../../../assets/icons/slider/photo2.png'
import photo3 from '../../../assets/icons/slider/photo3.png'
import photo4 from '../../../assets/icons/slider/photo4.png'
import frame from '../../../assets/icons/slider/frame.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './PhotoSlider.css'
import styles from './PhotoSlider.module.scss'

// import required modules
import {EffectCoverflow, Pagination} from "swiper";

const PhotoSlider = () => {



    const data = [
        {
            image: photo2,
            title: 'ZEPPELIN BAR',
            text: 'STREET CREDIBILITY',
            date: 'Суббота 14 мая'
        },
        {
            image: photo1,
            title: 'ZEPPELIN BAR',
            text: 'STREET CREDIBILITY',
            date: 'Суббота 14 мая'
        },
        {
            image: photo3,
            title: 'ZEPPELIN BAR',
            text: 'STREET CREDIBILITY',
            date: 'Суббота 14 мая'
        },
        {
            image: photo4,
            title: 'ZEPPELIN BAR',
            text: 'STREET CREDIBILITY',
            date: 'Суббота 14 мая'
        },

    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
        },
    };

    return (
            <Swiper
                loop={true}
                initialSlide={1}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={
                    window.innerWidth <= 1250 ? 2 : window.innerWidth <= 1000 ? 2 : 3
                }
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={pagination}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.card}>
                                <div className={styles.card__frame}>
                                    <img src={frame} alt="" className={styles.card__frame_ramka}/>
                                </div>
                                <div className={styles.card__about}>
                                    <div className={styles.card__about__txt}>
                                        <img className={styles.card__about__photo} src={item.image} style={{width: 449.72, height: 434.01}}  alt=""/>
                                        <h4 className={styles.card__about__title}>{item.title}</h4>
                                        <h5 className={styles.card__about__text}>{item.text}</h5>
                                        <p className={styles.card__about__date}>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    );
};

export default PhotoSlider;