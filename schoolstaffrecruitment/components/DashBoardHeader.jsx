import React from 'react';
import Stats from './Stats';

const DashBoardHeader = () => {
  return (
    <>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row">
       
           <Stats />
          
          <div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardHeader;
