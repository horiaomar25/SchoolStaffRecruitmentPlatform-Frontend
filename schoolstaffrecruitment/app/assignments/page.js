"use client"
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import AssignmentCard from '@/components/AssignmentCard';
import useAssignment from '@/customhooks/useAssignment';
import Success from '@/components/Success';

const Page = () => {
  
  const{ acceptedAssignment, fetchAcceptedAssignment } = useAssignment();

  //  a flag to check if assignment has been accepted
  const [isAssignmentAccepted, setIsAssignmentAccepted] = useState(false);
  
  // fetch accepted assignment on page load
  useEffect(() => {
   fetchAcceptedAssignment();
  }, [fetchAcceptedAssignment]);

  // Only runs when acceptedAssignment has changed
  useEffect(() => {
    if(acceptedAssignment) {
      setIsAssignmentAccepted(true);
    }
  }, [acceptedAssignment]);
  
  // Function to handle the user click on the accept button (manual state update)
  const handleAcceptance = () =>{
    setIsAssignmentAccepted(true);
  }


  return (
    <main >
      <Navigation />
      {isAssignmentAccepted  || acceptedAssignment ? (
      <div className='w-1/2 flex flex-col items-center mx-auto '>
        <Success />
      </div>
      ) :(
        <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-10 gap-4'>
        <AssignmentCard onAcceptance={handleAcceptance}/>
      </main>
      )
    
    }
    </main>
  );
};

export default Page;