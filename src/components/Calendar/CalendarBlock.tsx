import React, { useEffect, useState } from 'react';
import './CalendarBlock.scss';

// @ts-ignore
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import LowerBlock from '../ui/lower-block/lowerBlock';
import { useLazyGetEventsPhotoByDateQuery } from '../../store/features/PhotoPage/GetEventsPhoto';
import PlaceCard from '../Photo/PlaceCard/PlaceCard';
import dayjs from 'dayjs';


const CalendarBlock = ({open , setOpen}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [value, setValue] = useState(new Date());
    const [fetchData, {data, isLoading}] = useLazyGetEventsPhotoByDateQuery();

    useEffect(() => {
        fetchData(dayjs(value).format('YYYY-MM-DD'));
    }, [value]);

    return (
        <div className={open ? "fade_block active" : "fade_block"}
             onClick={(e) =>
                 setOpen(false)}>
            <div className="calendarContainer"
                 onClick={e => e.stopPropagation()}>
                <ul className="filterBlock">
                    <li className="filterBlock__item-active">Светская жизнь</li>
                    <li className="filterBlock__item">Клубы</li>
                    <li className="filterBlock__item">Бары</li>
                    <li className="filterBlock__item">Караоке</li>
                </ul>
                <div className="contentBlock">
                    <div className="contentBlock__calendar">
                        <Calendar
                            onChange={setValue}
                            value={value}
                            locale="ru-RU"
                        />
                    </div>
                    <div className="contentBlock__events">
                        {data?.map((item, i) => (<div key={i} className="item">
                            <PlaceCard data={item}/>
                        </div>))}
                        {isLoading && <div className="item">Loading...</div>}
                        {!data?.length &&
                            !isLoading &&
                            <div className="dataEmpty">
                                <h3 className='dataEmpty__title'>По выбранной дате нет событий</h3>
                            </div>}
                    </div>
                </div>
                <LowerBlock/>
            </div>
        </div>
    );
};

export default CalendarBlock;