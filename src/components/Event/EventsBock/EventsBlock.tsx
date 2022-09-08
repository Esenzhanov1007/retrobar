import React from 'react';
import styles from './EventsBlock.module.scss';
import PlaceCard from '../../Photo/PlaceCard/PlaceCard';
import { PlaceData } from '../../../types/types';
import image1 from '../../../assets/PhotoPage/photo1.png';
import image2 from '../../../assets/PhotoPage/photo2.png';
import image3 from '../../../assets/PhotoPage/photo3.png';
import image from '../../../assets/PhotoPage/test.png';


const EventsBlock = ({title}: {title: string}) => {
    const data: PlaceData = {
        placeName: 'ZEPPELIN BAR',
        eventName: 'STREET CREDIBILITY',
        eventDate: '14 мая 2022',
        views: 6545,
        photographName: 'Фотостудия "Оригами"',
        photos: [image1, image2, image3, image, image, image,]
    }

    return (
        <div className={styles.eventBlock}>
            <h2 className={styles.eventBlock__title}>{title}</h2>
            <div className={styles.eventBlock__events}>
                <div className={styles.item}>
                    <PlaceCard data={data}/>
                </div>
                <div className={styles.item}>
                    <PlaceCard data={data}/>
                </div>
                <div className={styles.item}>
                    <PlaceCard data={data}/>
                </div>

            </div>
            <button className={styles.eventBlock__seeAllBtn}>Смотреть все</button>
        </div>
    );
};

export default EventsBlock;