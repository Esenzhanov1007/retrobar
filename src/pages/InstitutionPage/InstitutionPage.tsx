import React from 'react';
import InstitutionFilm from "../../components/InstitutionPage/InstitutionFilm/InstitutionFilm";
import styles from "../InstitutionPage/InstitutionPage.module.scss";
import BarSlider from "../../components/MainPage/BarSlider/BarSlider";
import PlaceSlider from "../../components/MainPage/PlaceSlider/PlaceSlider";
import OrderForPages from "../../components/ui/order-for-pages/OrderForPages";
import gradient from '../../assets/InstitutionPage/gradient.png'
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import Footer from "../../layout/Footer/Footer";

const InstitutionPage = () => {
    return (
        <div className={styles.InstitutionPage}>
            <div className={styles.div_wrapper}>
                <h3 className={styles.institution__title}>Топ заведения</h3>
                <InstitutionFilm />
                <div className={styles.slider__wrapper}>
                    <PlaceSlider />
                </div>
            </div>
            <div className={styles.order__wrapper}>
                <div className={styles.gradient}>
                </div>
                <OrderForPages />
                <div className={styles.gradient_two}></div>
            </div>
            <LowerBlock />
            <Footer />
        </div>
    );
};

export default InstitutionPage;