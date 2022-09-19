import React from 'react';
import styles from './VideoReport.module.scss';
import { useNavigate } from "react-router-dom"
import { ENV, VIDEO_PLAYER_PAGE } from '../../../consts/consts';
import { ReportVideo } from '../../../types/types';

const VideoReport = ({videoReport}: {videoReport: ReportVideo}) => {
    const navigate = useNavigate();
    console.log(ENV + videoReport.preview[0], 'wwwwwwwwwwww')
    return (
        <div className={styles.container_videoReport} onClick={() => navigate(VIDEO_PLAYER_PAGE.replace(':id', `${videoReport.id}`), )}>
            <img className={styles.container_videoReport__prevImage} src={ENV + videoReport.preview[0]} alt={videoReport.eventName}/>
            <div className={styles.container_videoReport__information}>
                <span>{videoReport.views}</span>
                <h5>{videoReport.eventName.toUpperCase()}</h5>
            </div>
        </div>
    );
};

export default VideoReport;