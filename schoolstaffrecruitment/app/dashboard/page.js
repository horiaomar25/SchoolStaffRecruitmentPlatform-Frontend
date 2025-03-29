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

  const { acceptedAssignment, fetchAcceptedAssignment, timesheet, fetchTimeSheet, loading, error } = useAssignment();
    const router = useRouter();

    useEffect(() => {
        fetchAcceptedAssignment();
    }, [fetchAcceptedAssignment]);

    useEffect(() => {
        if (acceptedAssignment) {
            fetchTimeSheet(acceptedAssignment.assignmentId);
        }
    }, [acceptedAssignment, fetchTimeSheet]);

    // Handle loading and error states
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <>
                <Navigation />
                <main className="p-10">
                    <div>Error: {error}</div>
                </main>
            </>
        );
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
          <Stats acceptedAssignment={acceptedAssignment} />
          <div className='flex flex-row justify-evenly mt-3'>
            <div className='w-80 h-80'> 
              <TimeSheetCard timesheet={timesheet} />
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
