"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from "../../components/Navigation";
import Header from "../../components/DashBoardHeader";
import WorkHistoryCard from "@/components/WorkHistoryCard";
import ProfileCard from "@/components/ProfileCard";


function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if the user is authenticated by checking the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');

    // If there's no token or the token is invalid, redirect to login
    if (!token) {
      router.push('/');
    } else {
      setIsAuthenticated(true); // User is authenticated
    }
  }, [router]);

  

 
  
  if (!isAuthenticated) {
    return <p> Not Authenicated...</p>;
  }

  return (
    <> 
    
    <Navigation />
      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
       
        <section>
          <ProfileCard />
          <ProfileCard />
          </section>

          <section>
             <WorkHistoryCard />
             
          </section>
         
        
      </main>
    </>
  );
}

export default Page;

