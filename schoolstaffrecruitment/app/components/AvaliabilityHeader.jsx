import React from 'react';
import CalendarPage from './Calendar';

const AvaliabilityHeader = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      {/* <h2 className="text-xl font-semibold">Welcome to the Dashboard</h2>
      <p className="mt-4 text-gray-600">Select an option from the sidebar to proceed.</p> */}
      <div className="mt-6">
        <CalendarPage />
      </div>
    </div>
  );
};

export default AvaliabilityHeader;
