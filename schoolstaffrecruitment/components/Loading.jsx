import React from 'react'
import Image from 'next/image';
import logo from '../public/logo.png';

const Loading = () => {
  return (
    <main className='h-screen flex justify-center items-center flex-col'>
      <Image 
        src={logo} 
        alt="School Staff Recruitment Logo" 
        width={200} 
        height={100} 
        className='mb-2'
      />
      <span className="loading loading-bars loading-lg"></span>
    </main>
  )
}

export default Loading
