import React from 'react';
import PhotoSlider from "../../components/MainPage/PhotoSlider/PhotoSlider";
import Institution from "../../components/MainPage/Institution/Institution";
import BarSlider from "../../components/MainPage/BarSlider/BarSlider";
import OrderForPages from "../../components/ui/order-for-pages/OrderForPages";
import styles from './MainPage.module.scss'
import Footer from "../../layout/Footer/Footer";
import orderImg from '../../assets/icons/order/orderimg.png';



const MainPage = () => {

    const data = {
        title: 'Заказать страницу',
        description: 'Современные технологии достигли такого уровня, ' +
                        'что перспективное планирование способствует подготовке' +
            ' и реализации позиций, занимаемых участниками в отношении поставленных задач.',
        image: orderImg
    }
    return (
        <div className={styles.MainPage}>
            <div className={styles.div}>
                <PhotoSlider />
                <BarSlider />
            </div>
            {/*<PhotoReport />*/}
            <Institution />
            <OrderForPages data={data} />
            <Footer />
        </div>
    );
};

export default MainPage;