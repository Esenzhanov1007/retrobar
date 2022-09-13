import React from 'react';
import './PhotoGrid.scss';
import PlaceCard from "../PlaceCard/PlaceCard";
import { PhotoEvent } from '../../../types/types';


const PhotoGrid = ({data}: {data: PhotoEvent[]}) => {

    let classNameItem = "grid_item grid_item_";

    return (
        <div className="grid">
            {data?.map((item, i) => (
                <div style={{color: '#fff'}}
                    className={classNameItem + (i+1)} key={i}
                >
                    <PlaceCard data={item}/>
                 </div>
            ))}
            {/*<div className="grid_item grid_item_advertising_1">*/}
            {/*    <FirstAdBlock data={adDataFirst}/>*/}
            {/*</div>*/}
            {/*<div className="grid_item grid_item_advertising_2">*/}
            {/*    <SecondAdBlock data={adDataSecond}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default PhotoGrid;