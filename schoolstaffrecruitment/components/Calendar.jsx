"use client";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState, useEffect } from 'react';

function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

  useEffect(() => {
    // Fetch existing unavailable dates from the server
    const fetchUnavailableDates = async () => {
      const response = await fetch('/api/availability');
      const data = await response.json();
      setEvents(data.map(range => ({
        title: 'Unavailable',
        start: range.startDate,
        end: range.endDate,
        display: 'background',
        color: 'red'
      })));
    };

    fetchUnavailableDates();
  }, []);

  const handleSelect = (selectionInfo) => {
    const { startStr, endStr } = selectionInfo;
    setSelectedRange({ start: startStr, end: endStr });
    saveUnavailableRange({ start: startStr, end: endStr });
  };

  const saveUnavailableRange = async (range) => {
    const response = await fetch('/api/availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(range),
    });
    if (response.ok) {
      // Update events with the new unavailable range
      setEvents([...events, {
        title: 'Unavailable',
        start: range.start,
        end: range.end,
        display: 'background',
        color: 'red'
      }]);
    } else {
      // Handle error
      console.error('Error saving unavailable range');
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        initialView="dayGridMonth"
        nowIndicator
        editable
        selectable
        selectMirror
        select={handleSelect}
        events={events}
      />
    </div>
  );
}

export default Calendar;


