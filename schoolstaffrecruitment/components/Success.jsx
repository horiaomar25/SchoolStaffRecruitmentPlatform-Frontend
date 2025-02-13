import React from 'react';
import Image from 'next/image';
import logo from "../public/logo.png";

const Success = () => {
  return (
    <div role="alert" className="flex items-center justify-center flex-col no-border h-screen "> 
      <Image 
        src={logo} 
        alt="School Staff Recruitment Logo" 
        width={200} 
        height={100} 
        className='mb-2'
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 className="font-bold text-2xl mt-4">You have accepted an assignment!</h2>
    </div>
  );
};

export default Success;