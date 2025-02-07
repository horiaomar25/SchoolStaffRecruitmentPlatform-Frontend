"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from "../../components/Navigation";
import DashBoardHeader from '../../components/DashBoardHeader';
import TimeSheetCard from "@/components/TimeSheetCard";
import Image from 'next/image';
import Calendar from '@/components/Calendar';

import { useProfile } from '@/context/ProfileContext';
import Stats from '@/components/Stats';
import AssignedCard from '@/components/AssignedCard';

function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { profile, loading, error } = useProfile();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return null;
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <p>Not Authenticated...</p>;
  }

  return (
    <>
      <Navigation />
      
      {/* Main container with grid for layout */}
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-10">
        
        {/* Profile Picture on the left */}
        <div className="col-span-1 lg:col-span-1 flex justify-center">
          <Image 
            src="https://img.freepik.com/free-photo/office-happy-man-work_144627-6324.jpg" 
            alt="profile" 
            className="w-full rounded-lg shadow-2xl object-cover"
            width={300} 
            height={300}
          />
        </div>

       
        <div className="col-span-1 lg:col-span-3">
          <Stats />
          <div className='flex flex-row justify-evenly'>
             <TimeSheetCard />
            <AssignedCard />
          </div>
         
        </div>

       
      

      </main>
    </>
  );
}

export default Page;


