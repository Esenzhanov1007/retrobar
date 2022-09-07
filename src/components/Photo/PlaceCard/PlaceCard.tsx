import React, {useState} from 'react';
import {PlaceData} from "../../../types/types";
import styles from "./PlaceCard.module.scss"
import ModalWindow from "../../ui/modal-window/ModalWindow";

const PlaceCard = ({data}: { data: PlaceData }) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.place_card} onClick={() => setModalActive(true)}>
            <img className={styles.place_card__image} alt="" src={data.photos[0]}/>
            <div className={styles.place_card__body}>
                <h4 className={styles.body_title}>
                    {data.placeName}
                    <span
                        className={styles.body_subtitle}>{data.eventName}</span>
                </h4>
                <div className={styles.body_actions}>
                    <span className={styles.body_actions__views}>{data.views}</span>
                    <span className={styles.body_actions__photos}>{data.photos.length}</span>
                    <span className={styles.body_actions__date}>{data.eventDate}</span>
                </div>
            </div>
            <ModalWindow data={data}
                         active={modalActive}
                         setActive={setModalActive}/>
        </div>)

};
export default PlaceCard;