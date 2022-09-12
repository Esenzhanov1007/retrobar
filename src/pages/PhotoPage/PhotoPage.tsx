import React from 'react';
import styles from "./PhotoPage.module.scss"
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";
import PhotoGrid from "../../components/Photo/PhotoGrid/PhotoGrid";
import { useGetEventsPhotoQuery } from '../../store/features/PhotoPage/GetEventsPhoto';

const PhotoPage = () => {

    const  {data} = useGetEventsPhotoQuery();

    
    return (
        <div className={styles.container}>
            <TitleForPages title={'Актуальные фотоотчеты'}/>
            {data && <PhotoGrid data={data}/>}
            <LowerBlock/>
        </div>
    );
};

export default PhotoPage;