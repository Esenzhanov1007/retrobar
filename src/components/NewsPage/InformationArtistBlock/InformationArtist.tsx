import React from 'react';
import styles from './InfomationArtist.module.scss';
import artist from '../../../assets/NewsPage/person.png';

const InformationArtist = () => {

    const data = {
        avatar: artist,
        name: 'Александр',
        label: 'BLACKSTAR',
        info: 'Являясь всего лишь частью общей картины',
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src={data.avatar} alt=""/>
            </div>
            <div className={styles.informationBlock}>
                <h4 className={styles.informationBlock__artistName}>{data.name}</h4>
                <span className={styles.informationBlock__artistLabel}>{data.label}</span>
                <p className={styles.informationBlock__artistInfo}>{data.info}</p>
            </div>
        </div>
    );
};

export default InformationArtist;