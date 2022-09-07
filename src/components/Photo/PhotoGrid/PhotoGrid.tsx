import React from 'react';
import './PhotoGrid.scss';
import {AdData, PlaceData} from '../../../types/types';
import image from '../../../assets/PhotoPage/test.png';
import image1 from '../../../assets/PhotoPage/photo1.png';
import image2 from '../../../assets/PhotoPage/photo2.png';
import image3 from '../../../assets/PhotoPage/photo3.png';
import PlaceCard from "../PlaceCard/PlaceCard";
import FirstAdBlock from "../AdBlock/FirstAdBlock";
import SecondAdBlock from "../AdBlock/SecondAdBlock";


const PhotoGrid = () => {
    const data: PlaceData = {
        placeName: 'ZEPPELIN BAR',
        eventName: 'STREET CREDIBILITY',
        eventDate: '14 мая 2022',
        views: 6545,
        photographName: 'Фотостудия "Оригами"',
        photos: [image1, image2, image3, image, image, image,]
    }

    const adDataFirst: AdData = {
        title: 'Фото и видео услуги',
        description: 'Современные технологии достигли такого уровня, что перспективное планирование способствует.'
    };

    const adDataSecond: AdData = {
        title: 'Заказать сьёмку сейчас',
        description: 'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.'
    }


    const places: PlaceData[] = [
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
        data,
    ]


    let classNameItem = "grid_item grid_item_";

    return (
        <div className="grid">
            {places.map((item, i) => (
                <div style={{color: '#fff'}}
                    className={classNameItem + (i+1)} key={i}
                >
                    <PlaceCard data={item}/>
                 </div>
            ))}
            <div className="grid_item grid_item_advertising_1">
                <FirstAdBlock data={adDataFirst}/>
            </div>
            <div className="grid_item grid_item_advertising_2">
                <SecondAdBlock data={adDataSecond}/>
            </div>
        </div>

    );
};

export default PhotoGrid;