import React from 'react';
import NewsBlock from "../NewsBlock/NewsBlock";
import styles from './Institution.module.scss';
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import PlaceSlider from "../PlaceSlider/PlaceSlider";

const Institution = () => {
    return (
        <div className={styles.institution}>
            <PlaceSlider />
            <NewsBlock />
        </div>
    );
};

export default Institution;

