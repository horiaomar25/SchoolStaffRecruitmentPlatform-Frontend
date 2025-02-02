"use client";
import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
const FullCalendar = () => {
  const calendarRef = useRef(null);
  useEffect(() => {
    if (calendarRef.current) {
      
      const calendar = new Calendar(calendarRef.current, {
        plugins: [dayGridPlugin], 
        initialView: 'dayGridMonth', 
      });
      
      calendar.render();
    }
    
    
    return () => {
      if (calendarRef.current) {
        calendar.destroy();
      }
    };
  }, []);
  return (
    <div>
      <div ref={calendarRef} /> 
    </div>
  );
};
export default FullCalendar;