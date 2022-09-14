import React from 'react';
import styles from './EventsBlock.module.scss';
import PlaceCard from '../../Photo/PlaceCard/PlaceCard';
import { PhotoEvent } from '../../../types/types';
import image1 from '../../../assets/PhotoPage/photo1.png';
import image2 from '../../../assets/PhotoPage/photo2.png';
import image3 from '../../../assets/PhotoPage/photo3.png';
import image from '../../../assets/PhotoPage/test.png';


const EventsBlock = ({title}: {title: string}) => {
    const data: PhotoEvent = {
        date: 'string',
        eventname: 'string',
        eventphotos: [image, image1, image2, image3],
        id: 1,
        link: 'string',
        photographerId: 23,
        pubId: 2,
        views: 2
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