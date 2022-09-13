import React from 'react';
import styles from './PhotoPage.module.scss'
import LowerBlock from '../../components/ui/lower-block/lowerBlock';
import TitleForPages from '../../components/ui/title-for-pages/titleForPages';
import PhotoGrid from '../../components/Photo/PhotoGrid/PhotoGrid';
import { useGetEventsPhotoQuery } from '../../store/features/PhotoPage/GetEventsPhoto';
import { Audio } from 'react-loader-spinner'
import CalendarButton from '../../components/ui/calendar-button/CalendarButton';

const PhotoPage = () => {

    const {data, isLoading} = useGetEventsPhotoQuery();

    return (
        <div className={styles.container}>
            <CalendarButton/>
            <TitleForPages title={'Актуальные фотоотчеты'}/>
            {data && <PhotoGrid data={data}/>}
            {isLoading && <Audio
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="audio-loading"
                wrapperStyle={{
                    display: 'block',
                    width: '300px',
                    margin: '0 auto',
                    paddingTop: '80px'
                }}
                wrapperClass="wrapper-class"
                visible={true}
            />}
            <LowerBlock/>
        </div>
    );
};

export default PhotoPage;