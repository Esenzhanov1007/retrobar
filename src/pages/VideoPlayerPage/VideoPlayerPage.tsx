import React from 'react';

import {useParams} from "react-router-dom";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";
import styles from "./VideoPlayerPage.module.scss"
import ShareButton from "../../components/ui/share-button/ShareButton";

const VideoPlayerPage = () => {
    const {id} = useParams()

    return (
        <div className={styles.videoPlayer}>
            <TitleForPages title="Title name"/>
            {/*<Player videoReport={videoReport} />*/}
            <ShareButton/>
        </div>
    );
};

export default VideoPlayerPage;