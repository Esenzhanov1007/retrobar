import React from 'react';
import styles from "./BannerBlock.module.scss";

const BannerBlock = ({image}: {image: string}) => {
    return (
        <div className={styles.bannerContainer}>
           <img className={styles.bannerImage} src={image} alt=""/>
        </div>
    );
};

export default BannerBlock;