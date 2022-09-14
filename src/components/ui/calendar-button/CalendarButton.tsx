import React, { useState } from 'react';
import './CalendarButton.scss';
import CalendarBlock from '../../Calendar/CalendarBlock';

const CalendarButton = () => {
    const [calendarActive, setCalendarActive] = useState(false);

    return (
        <>
            <span
                className="calendar"
                onClick={() => setCalendarActive(!calendarActive)}
            >
                Календарь
            </span>
            <CalendarBlock
                active={calendarActive}
                setActive={setCalendarActive}
            />

        </>
    );
};

export default CalendarButton;