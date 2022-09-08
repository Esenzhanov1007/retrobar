import React from 'react';
import RecommendationBlock from "../../components/Event/RecommendationBlock/RecommendationBlock";
import styles from './EventPage.module.scss';
import bannerImg from '../../../src/assets/EventPage/ph banner.png';
import BannerBlock from "../../components/Event/BannerBlock/BannerBlock";
import EventsBlock from "../../components/Event/EventsBock/EventsBlock";
import LowerBlock from '../../components/ui/lower-block/lowerBlock';

const EventPage = () => {
    return (
        <div className={styles.container}>
            <RecommendationBlock/>
            <BannerBlock image={bannerImg}/>
            <EventsBlock title="Все события"/>
            <LowerBlock/>
        </div>
    );
};

export default EventPage;