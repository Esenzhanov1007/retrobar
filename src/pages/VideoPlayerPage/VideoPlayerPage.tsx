import React from 'react';
import Player from "../../components/ui/video-player/Player";
import preview from "../../assets/VideoPage/video-preview-lg.png";
import {useParams} from "react-router-dom";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";
import styles from "./VideoPlayerPage.module.scss"
import ShareButton from "../../components/ui/share-button/ShareButton";

const VideoPlayerPage = () => {
    const {id} = useParams()

    const videoReport =  {
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
        }

    return (
        <div className={styles.videoPlayer}>
            <TitleForPages title="Title name"/>
            <Player videoReport={videoReport} />
            <ShareButton/>
        </div>
    );
};

export default VideoPlayerPage;