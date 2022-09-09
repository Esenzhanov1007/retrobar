import React from 'react';
import PhotoSlider from "../../components/MainPage/PhotoSlider/PhotoSlider";
import Institution from "../../components/MainPage/Institution/Institution";
import BarSlider from "../../components/MainPage/BarSlider/BarSlider";
import OrderForPages from "../../components/ui/order-for-pages/OrderForPages";
import styles from './MainPage.module.scss'
import Footer from "../../layout/Footer/Footer";
import PlaceSlider from "../../components/MainPage/PlaceSlider/PlaceSlider";
import PhotoReport from "../../components/MainPage/photo-report/PhotoReport";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";

const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <div className={styles.div}>
                <PhotoSlider />
                <BarSlider />
            </div>
            {/*<PhotoReport />*/}
            <Institution />
            {/*<OrderForPages />*/}
            <Footer />
        </div>
    );
};

export default MainPage;