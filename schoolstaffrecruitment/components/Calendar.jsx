"use client";
import React, { useState, useEffect } from 'react';
import "cally"; // Import the cally library

const Calendar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run this effect on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // If it's not a client-side render, don't render the calendar yet
    return null;
  }

  return (
    <div className="calendar-container bg-white">
      <calendar-date className="cally p-10 bg-white border border-base-300 shadow-lg rounded-box calendar-date-style">
        <svg
          aria-label="Previous"
          className="size-4"
          slot="previous"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
        <svg
          aria-label="Next"
          className="size-4"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
        <calendar-month className="calendar-month-style"></calendar-month>
      </calendar-date>
    </div>
  );
};

export default Calendar;


