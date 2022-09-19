import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './Player.module.scss'
import { ENV } from '../../../consts/consts';

const Player = ({videoReport}: { videoReport: any }) => {

    const [play, setPlay] = useState(false);

    return (
        <>
            {videoReport ? <ReactPlayer
                controls={true}
                width="100%"
                style={{minHeight: '518px'}}
                url={ENV + videoReport[1][0].eventvideos[0]}
                playing={play}
                playIcon={<button
                    className={styles.btn_play}
                    onClick={() => setPlay(true)}
                />}
                light={ENV + videoReport[1][0].preview[0]}
            ></ReactPlayer> : null
            }
        </>
    );
};

export default Player;