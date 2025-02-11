"use client";
import React, { use, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from "../../components/Navigation";
import TimeSheetCard from "@/components/TimeSheetCard";
import Image from 'next/image';
import Stats from '@/components/Stats';
import AssignedCard from '@/components/AssignedCard';
import useAssignment from '@/customhooks/useAssignment';
import Loading from '@/components/Loading';


function Page() {

  // useAssignment hook to get accepted assignment to card on dashboard
  const { acceptedAssignment, fetchAcceptedAssignment, timeSheet, fetchTimeSheet  } = useAssignment();
  
  // checks if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // router from next
  const router = useRouter();
  
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return null;
    } else {
      setIsAuthenticated(true); // Mark user as authenticated
      fetchAcceptedAssignment(); // Fetch the accepted assignment when the component mounts
      
    }
  },[fetchAcceptedAssignment, router]); // re-run the effect when the function changes

  useEffect(() => {
    // check if the accepted assignment exists and fetch the timesheet
    if(acceptedAssignment) {
      fetchTimeSheet(acceptedAssignment.id);
    }
  }, [acceptedAssignment, fetchTimeSheet]);


  if (!isAuthenticated) {
    return <Loading/>;
  }

  return (
    <>
     <Navigation />
      
      {/* Main container with grid for layout */}
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-10">
        
        {/* Profile Picture on the left */}
        <section className="col-span-1 lg:col-span-1 flex justify-center">
          <Image 
            src="https://img.freepik.com/free-photo/office-happy-man-work_144627-6324.jpg" 
            alt="profile" 
            className="w-70 object-cover"
            width={300} 
            height={300}
          />
        </section>
        {/* Stats, TimeSheetCard and Assignment card on right */}
        <section className="col-span-1 lg:col-span-3">
          <Stats />
          <div className='flex flex-row justify-evenly mt-3'>
            <div className='w-80 h-80'> 
              <TimeSheetCard timeSheet={timeSheet} />
            </div>
            <div className='w-80 h-80'> 
              <AssignedCard acceptedAssignment={acceptedAssignment}  />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
