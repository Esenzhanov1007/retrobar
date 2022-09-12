import React from 'react';
import './PhotoReport.scss';
import {PlaceData} from "../../../types/types";
import image3 from "../../../assets/PhotoPage/photo3.png";
import image2 from "../../../assets/PhotoPage/photo2.png";

const PhotoReport = () => {
    const data: PlaceData = {
        placeName: 'ZEPPELIN BAR',
        eventName: 'STREET CREDIBILITY',
        eventDate: '14 мая 2022',
        views: 6545,
        photographName: 'Фотостудия "Оригами"',
        photos: [image3, image2, image2, image2, image2, image3,]
    }

    const places: PlaceData[] = [
        data,
        data,
        data,
        data,
        data]


    return (
        <></>
        // <div className="photo_report_wrapper">
        //     <h1 className="photo_report_title">Актуальные фотоотчёты</h1>
        //     <div className="wrapper">
        //         <div className="grid__item1">
        //             <PlaceCard data={places[0]}/>
        //         </div>
        //         <div className="grid__item2">
        //             <PlaceCard data={places[0]}/>
        //         </div>
        //         <div className="grid__item3">
        //             <PlaceCard data={places[0]}/>
        //         </div>
        //         <div className="grid__item4">
        //             <PlaceCard data={places[0]}/>
        //         </div>
        //         <div className="grid__item5">
        //             <PlaceCard data={places[0]}/>
        //         </div>
        //     </div>
        //     <div className="photo_report_button">
        //         <button className="photo_report_btn">Все фото</button>
        //     </div>
        // </div>
    );
};

export default PhotoReport;