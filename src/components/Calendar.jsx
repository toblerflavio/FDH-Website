import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


export default function CalendarComponent({ events }) {
    const calendarRef = useRef(null);

    useEffect(() => {
        const calendar = new Calendar(calendarRef.current, {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
            events: events,
            editable: false,
        });
        calendar.render();
    }, [events]);

    return <div ref={calendarRef}></div>;
}
