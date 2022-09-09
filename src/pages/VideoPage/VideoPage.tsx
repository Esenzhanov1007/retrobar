import React from 'react';
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import Player from "../../components/ui/video-player/Player";
import styles from "./VideoPage.module.scss"
import {ReportVideo} from "../../types/types";
import CarouselVideos from "../../components/ui/carousel-videos/CarouselVideos";
import preview from "../../assets/VideoPage/video-preview-lg.png"
import OrderForPages from '../../components/ui/order-for-pages/OrderForPages';
import orderImg from '../../assets/icons/order/orderimg.png';


const VideoPage = () => {

    const videoReports: ReportVideo[] = [
        {
            views: 500,
            id: 5,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
                "https://www.youtube.com/watch?v=WVGChZZfvbQ"
            ],
            preview: [
                preview
            ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 2,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 3,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 4,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 5,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            preview
        ],
            "pubId": 1,
            "photographerId": 1
        },
    ];
    
    const data = {
        title: 'Заказать страницу',
        description: 'Закажите страницу для вашего мероприятия и получите больше клиентов',
        image: orderImg
    }

    return (
        <div className={styles.container}>
                <OrderForPages data={data}/>
                <div className={styles.player_wrapper}>
                <Player videoReport={videoReports[0]}/>
            </div>
                <div className={styles.video_reports}>
                    <CarouselVideos videoReports={videoReports}/>
                    <CarouselVideos videoReports={videoReports}/>
                    <CarouselVideos videoReports={videoReports}/>
                </div>
                <LowerBlock/>
          </div>
    );
};

export default VideoPage;