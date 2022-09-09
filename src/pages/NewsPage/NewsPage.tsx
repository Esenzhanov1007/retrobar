import React from 'react';
import EventsBlock from '../../components/Event/EventsBock/EventsBlock';
import LowerBlock from '../../components/ui/lower-block/lowerBlock';
import styles from './NewsPage.module.scss';
import SwiperNews from '../../components/NewsPage/SwiperNews/SwiperNews';

const NewsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.swiperBlock}>
                <SwiperNews></SwiperNews>
            </div>
            <EventsBlock title="Ночная жизнь"/>
            <LowerBlock/>
        </div>
    );
};

export default NewsPage;