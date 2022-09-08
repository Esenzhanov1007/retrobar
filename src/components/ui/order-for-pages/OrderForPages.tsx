import React from 'react';
import styles from './OrderForPages.module.scss'
import orderimg from '../../../assets/icons/order/orderimg.png'

const OrderForPages = () => {
    return (
        <div className={styles.order}>
            <div className={styles.order__inner}>
                <div className={styles.order__image}>
                    <img src={orderimg} alt=""/>
                </div>
                <div className={styles.order__service}>
                    <h1 className={styles.service__title}>Заказать сьёмку сейчас</h1>
                    <p className={styles.service__text}>Современные технологии достигли такого уровня, что перспективное
                        планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении
                        поставленных задач.</p>
                    <button className={styles.service__btn}>Позвонить</button>
                </div>
            </div>
        </div>
    );
};

export default OrderForPages;