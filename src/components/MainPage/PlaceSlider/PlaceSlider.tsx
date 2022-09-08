import React from 'react';
import styles from './PlaceSlider.module.scss'
import placeframe from '../../../assets/icons/placeslider/placeframe1.png'
import placeframe2 from '../../../assets/icons/placeslider/placeframe2.png'
import placeframe3 from '../../../assets/icons/placeslider/placeframe3.png'
import photo1 from '../../../assets/icons/placeslider/placephoto1.png'
import photo2 from '../../../assets/icons/placeslider/placephoto2.png'
import photo3 from '../../../assets/icons/placeslider/placephoto3.png'
import keanu from '../../../assets/icons/placeslider/placelogo.svg'
import geotag from '../../../assets/icons/placeslider/geotag.svg'
import phone from '../../../assets/icons/placeslider/phone.svg'
import clock from '../../../assets/icons/placeslider/clock.svg'
import soup from '../../../assets/icons/placeslider/soup.svg'
import salads from '../../../assets/icons/placeslider/salads.svg'
import dessert from '../../../assets/icons/placeslider/desserts.svg'
import wine from '../../../assets/icons/placeslider/wine.svg'
import star from '../../../assets/icons/placeslider/placestar.svg'
import arrowLeft from '../../../assets/icons/placeslider/arrowleft.svg'
import arrowRight from '../../../assets/icons/placeslider/arrowright.svg'
import {useSwiper} from "swiper/react";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './PlaceSlider.css';


const PlaceSlider = () => {

    const data = [
        {
            frame: placeframe2,
            photo: photo2,
            logo: keanu,
            geotag: geotag,
            clock: clock,
            phone: phone,
            title: "KEANU",
            subtitle: "Bar",
            address: "Манаса 28",
            time: "18:00-05:00",
            number: "0501 818 189",
            price_hot_dishes: "~700 с",
            price_desserts: "~500 с",
            price_dinner: "~900 с",
            price_wine: "~1000 с",
        },
        {
            frame: placeframe,
            photo: photo1,
            logo: keanu,
            geotag: geotag,
            clock: clock,
            phone: phone,
            title: "KEANU",
            subtitle: "Bar",
            address: "Манаса 28",
            time: "18:00-05:00",
            number: "0501 818 189",
            price_hot_dishes: "~700 с",
            price_desserts: "~500 с",
            price_dinner: "~900 с",
            price_wine: "~1000 с",
        },
        {
            frame: placeframe3,
            photo: photo3,
            logo: keanu,
            geotag: geotag,
            clock: clock,
            phone: phone,
            title: "KEANU",
            subtitle: "Bar",
            address: "Манаса 28",
            time: "18:00-05:00",
            number: "0501 818 189",
            price_hot_dishes: "~700 с",
            price_desserts: "~500 с",
            price_dinner: "~900 с",
            price_wine: "~1000 с",
        }
    ]

    return (
        <div className={styles.place__parent}>
            <h3 className={styles.place_parent_title}>Заведения</h3>
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
                className="placeSwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide className="place-swiper-slide" key={index}>
                        <div className={styles.place}>
                            <div className={styles.place__inner}>
                                <div className={styles.place__frame}>
                                    <img className={styles.place__frame__ramka} src={item.frame} alt=""/>
                                    <div className={styles.place__photo}>
                                        <img className={styles.place__photo__one} src={item.photo} alt=""/>
                                    </div>
                                </div>
                                <div className={styles.place__row}>
                                    <div className={styles.place__buttons}>
                                        <SwiperButtonPrev />
                                        <div className={styles.place__descr}>
                                            <img className={styles.place__descr__keanu} src={item.logo} alt=""/>
                                            <div className={styles.place__descr__text}>
                                                <h4 className={styles.place__descr__title}>
                                                    {item.title}
                                                </h4>
                                                <p className={styles.place__descr__bar}>
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <SwiperButtonNext />
                                    </div>

                                    <div className={styles.place__about}>
                                        <div className={styles.place__about__geotag}>
                                            <img src={item.geotag} alt=""/>
                                            <p>{item.address}</p>
                                        </div>
                                        <div className={styles.place__about__time}>
                                            <img src={clock} alt=""/>
                                            <p>{item.time}</p>
                                        </div>
                                        <div className={styles.place__about__phone}>
                                            <img src={phone} alt=""/>
                                            <p>{item.number}</p>
                                        </div>
                                    </div>
                                    <div className={styles.place__prices}>
                                        <div className={styles.prices__soup}>
                                            <img src={soup} alt=""/>
                                            <p>{item.price_hot_dishes}</p>
                                        </div>
                                        <div className={styles.prices__dinner}>
                                            <img src={salads} alt=""/>
                                            <p>{item.price_desserts}</p>
                                        </div>
                                        <div className={styles.prices__dessert}>
                                            <img src={dessert} alt=""/>
                                            <p>{item.price_dinner}</p>
                                        </div>
                                        <div className={styles.prices__wine}>
                                            <img src={wine} alt=""/>
                                            <p>{item.price_wine}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card__info__stars}>
                                        {Array(5)
                                            .fill(0)
                                            .map((_, index) => {
                                                return (
                                                    <img
                                                        className="card__info__stars__star"
                                                        src={star}
                                                        alt="star"
                                                    />
                                                );
                                            })}
                                        <p className="card__info__stars__score">9.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

    function SwiperButtonNext () {
        const swiper = useSwiper();
        return  <img className={styles.topSwiper__right} onClick={() => swiper.slideNext()} src={arrowRight} alt="" width="36px"/>
    }
    function SwiperButtonPrev () {
        const swiper = useSwiper();
        return  <img className={styles.topSwiper__left} onClick={() => swiper.slidePrev()} src={arrowLeft} alt="" width="36px"/>
    }
};

export default PlaceSlider;