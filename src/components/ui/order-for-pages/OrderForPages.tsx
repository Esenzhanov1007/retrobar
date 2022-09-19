import React, {useEffect, useState} from 'react';
import styles from './OrderForPages.module.scss'
import orderImg from '../../../assets/icons/order/orderimg.png'
import {OrderData, useGetAdQuery} from "../../../store/Ad/GetAd";


const OrderForPages = () => {
    const {data, isLoading} = useGetAdQuery();

    const [ad, setAd] = useState<OrderData | undefined>();


    useEffect(() => {
        if (Array.isArray(data)) {
            setAd(data[0]);
        }
    }, [data]);

    console.log(data);

    return (
        <div className={styles.order}>
            <div className={styles.order__image}>
                <img src={ad?.adphoto[0]} alt=""/>
            </div>
            <div className={styles.order__service}>
                <h4>{ad?.name}</h4>
                <p>{ad?.info}</p>
                <button className={styles.service__btn}>Позвонить</button>
            </div>
        </div>
    );
};

export default OrderForPages;