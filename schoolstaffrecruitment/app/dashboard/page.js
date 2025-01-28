"use client";
import React, { useEffect } from 'react';

import Navigation from "../../components/Navigation";
import Header from "../../components/DashBoardHeader";
import WorkHistoryCard from "@/components/WorkHistoryCard";
import ProfileCard from "@/components/ProfileCard";



function Page() {
  

 
  return (
    <>
      <main>
        <Navigation />
        <main>
          <Header />
          <ProfileCard />
          <WorkHistoryCard />
        
        </main>
      </main>
    </>
  );
}

export default Page;
