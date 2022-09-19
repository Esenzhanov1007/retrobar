import React, { useState } from 'react';
import './CalendarButton.scss';
import CalendarBlock from '../../Calendar/CalendarBlock';

const CalendarButton = () => {
    const [openCalendar, setOpenCalendar] = useState(false);

    return (
        <>
            <span
                className="calendar"
                onClick={() => setOpenCalendar(!openCalendar)}
            >
                Календарь
            </span>
            <CalendarBlock
                open={openCalendar}
                setOpen={setOpenCalendar}
            />

        </>
    );
};

export default CalendarButton;