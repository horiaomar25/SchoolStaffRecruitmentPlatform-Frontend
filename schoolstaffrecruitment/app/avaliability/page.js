import React from 'react';
import Navigation from '../../components/Navigation';
import  FullCalendarContainer from '../../components/FullCalendarContainer';

const page = () => {
  

  return (
    <main >
    <Navigation />
    <div className="m-6 border border-black p-20">
      <FullCalendarContainer />
  
    </div>
  </main>
  );
};

export default page;
