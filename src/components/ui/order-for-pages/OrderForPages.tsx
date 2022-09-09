import React from 'react';
import styles from './OrderForPages.module.scss'
import orderImg from '../../../assets/icons/order/orderimg.png'

interface OrderData {
    title: string,
    description: string,
    image: string
}

const OrderForPages = ({data}: {data: OrderData} ) => {

    return (
        <div className={styles.order}>
                <div className={styles.order__image}>
                    <img src={orderImg} alt=""/>
                </div>
                <div className={styles.order__service}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <button className={styles.service__btn}>Позвонить</button>
                </div>
        </div>
    );
};

export default OrderForPages;