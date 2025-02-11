import React from 'react';
import Navigation from '@/components/Navigation';
import AssignmentCard from '@/components/AssignmentCard';


const Page = () => {
  

  return (
    <main >
      <Navigation />
      <main className='grid grid-cols-3 m-10 gap-4'>
        <AssignmentCard/>
      </main>
      
      
    </main>
  );
};

export default Page;