
"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // FullCalendar plugin for grid view
import interactionPlugin from "@fullcalendar/interaction"; // Enables date selection

const FullCalendarContainer = () => {
  

  return (
   <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    weekends={false} // Will hide Saturdays and Sundays
   />
  );
};

export default FullCalendarContainer;
