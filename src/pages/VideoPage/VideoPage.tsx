import React from 'react';
import LowerBlock from '../../components/ui/lower-block/lowerBlock';
import styles from './VideoPage.module.scss'
import OrderForPages from '../../components/ui/order-for-pages/OrderForPages';
import orderImg from '../../assets/icons/order/orderimg.png';
import { useGetVideoEventsQuery } from '../../store/features/videoApi/getVideoEvents';
import Player from '../../components/ui/video-player/Player';

const VideoPage = () => {

    const {data, isLoading} = useGetVideoEventsQuery();

    const dataAd = {
        title: 'Заказать страницу',
        description: 'Закажите страницу для вашего мероприятия и получите больше клиентов',
        image: orderImg
    }

    return (
        <div className={styles.container}>
        <OrderForPages data={dataAd}/>
        <div className={styles.player_wrapper}>
            {data && <Player videoReport={data[1]}/>}
            {isLoading && <div style={{color: 'white'} }>loading...</div>}
        </div>
        {/*<div className={styles.video_reports}>*/}
        {/*    {isLoading && <div style={{color: 'white'}}>loading...</div>}*/}
        {/*    {data[1].length !== 0 ? data.map((item: any, index: number) => <CarouselVideos key={index} videoReports={item[1]}/>) : <div style={{color: 'white'}}>no data</div>}*/}
        {/*</div>*/}
        <LowerBlock/>
    </div>
    );
};





export default VideoPage;



