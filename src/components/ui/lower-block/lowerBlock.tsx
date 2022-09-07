import React from 'react';
import styles from './lowerBlock.module.scss'
import emoji from '../../../assets/icons/emoji.svg';
import arrow from '../../../assets/icons/arrow up.svg';


const LowerBlock = () => {

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(handlerScrollUp, 0);
        }
    }

    return (
            <div className={styles.lower_block}>
                <img className={styles.lower_block__emoji}
                     src={emoji}
                     alt=""/>
                <img className={styles.lower_block__arrow}
                     src={arrow}
                     alt=""
                     onClick={handlerScrollUp}
                />
            </div>
    );
};

export default LowerBlock;