import React from 'react';
import recommendationsImage from "../../../assets/VideoPage/video-preview-lg.png";
import tape_top from "../../../assets/EventPage/tape_top.png";
import tape_bottom from "../../../assets/EventPage/tape_bottom.png";
import styles from './RecommendationBlock.module.scss';



const RecommendationBlock = () => {


    return (
        <div className={styles.recommendations}>
            <img src={tape_top} alt="" className={styles.recommendations__tape_top}/>
            <img src={recommendationsImage} alt="" className={styles.recommendations__image}/>
            <img src={tape_bottom} alt="" className={styles.recommendations__tape_bottom}/>
            <div className={styles.recommendations__title}>
                <h4>SUZIE WONG / OPENING | MOT</h4>
                <span>1 июня 2022</span>
            </div>
        </div>
    );
};

export default RecommendationBlock;