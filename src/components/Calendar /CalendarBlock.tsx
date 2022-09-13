import React, { useState } from 'react';
import './CalendarBlock.scss';
import LowerBlock from '../ui/lower-block/lowerBlock';


const CalendarBlock = ({active , setActive}: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className={active ? "fade_block active" : "fade_block"}
             onClick={(e) =>
                 setActive(false)}>
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
                    </div>
                    <div className="contentBlock__events">
                        events
                    </div>
                </div>
                <LowerBlock/>
            </div>
        </div>
    );
};

export default CalendarBlock;