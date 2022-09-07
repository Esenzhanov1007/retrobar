import React, {useState} from 'react';
import ReactPlayer from "react-player";
import styles from './Player.module.scss'
import {ReportVideo} from "../../../types/types";
import preview from "../../../assets/VideoPage/video-preview-lg.png";

const Player = ({videoReport}: {videoReport: ReportVideo}) => {

    const [play, setPlay] = useState(false);
    console.log(videoReport.preview[0]);

    return (
        <>
            <ReactPlayer
                controls={true}
                width="100%"
                style={{minHeight: "518px"}}
                url={videoReport.eventVideos[0]}
                playing={play}
                playIcon={<button
                    className={styles.btn_play}
                    onClick={()=> setPlay(true)}
                />}
                light={preview}
            ></ReactPlayer>
        </>

    );
};

export default Player;