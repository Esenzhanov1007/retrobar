import React, {useState} from 'react';
import './ModalWindow.scss'
import { PhotoEvent } from '../../../types/types';
import Carousel from "../carousel-photos/Carousel";
import ShareButton from "../share-button/ShareButton";

const ModalWindow = ({active , setActive, data}: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    data : PhotoEvent}) => {
    const [slideNumber, setSlideNumber] = useState(1);

    const closeModal = () => {
        setActive(false);
    }

    console.log(active)

    return (
        <div className={active ? "fade_block active" : "fade_block" }
             onClick={closeModal}>
            <div
                className="modal"
                onClick={e => e.stopPropagation()}>
                <div
                    className="modal_header">
                    <button className="modal_header__btn-close"
                        onClick={closeModal}></button>
                    <h4 className="modal_header__title">{data.pubId}</h4>
                    <span className="modal_header__subtitle">{data.eventname}</span>
                </div>
                <div
                    className="modal_body">
                    <Carousel data={data} setCount={setSlideNumber}/>
                </div>
                <div
                    className="modal_footer">
                    <div className="modal_footer_photos-amount">
                        <span className="">{slideNumber + ' из ' + data.eventphotos.length}</span>
                    </div>
                    <div className="modal_footer_btn-group">
                        <ShareButton/>
                        <button className="modal_footer_btn-group__download">Скачать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;