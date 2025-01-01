import React from 'react';
import Calendar from '../components/Calendar';
import Navigation from '../components/Navigation';
import AvaliabilityHeader from '../components/AvaliabilityHeader';

const page = () => {
  return (
    <main className="flex h-screen">
      <Navigation />
      <div className="flex-1 bg-gray-100">
        <AvaliabilityHeader />
       
      </div>
    </main>
  );
};

export default page;
