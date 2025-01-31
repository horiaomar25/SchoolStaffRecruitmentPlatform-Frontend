"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import ProfileCard from "../../components/ProfileCard";
import WorkHistoryCard from "../../components/WorkHistoryCard";
import FeedbackCard from "@/components/FeedbackCard";
import ProfileDescriptionCard from "@/components/ProfileDescriptionCard";
import AssignmentCard from "@/components/AssignmentCard";
import { useRouter } from 'next/navigation';
import useAuth from '../../customhooks/useAuth';
import QualificationCard from "@/components/QualificationCard";


function Page() {

  const [showProfileDescription, setShowProfileDescription] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { token } = useAuth();
  const router = useRouter();
 
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); 
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleProfileDescription = () => {
    setShowProfileDescription(!showProfileDescription);
  };

 
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      router.push('/'); 
    }
  }, [token, router]);


  return (
    <>
      <Navigation />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 items-start grid-auto-rows-min">

      
        {/* Column 1 */}
        <section className="grid justify-center  space-y-4 max-h-screen ">
          <ProfileCard  />
          <FeedbackCard />
        </section>

        {/* Column 2 */}
        <section className="grid justify-center   space-y-4  lg:h-screen">
          <button
            onClick={toggleProfileDescription}
            className="btn btn-primary md:hidden lg:hidden"
          >
            {showProfileDescription ? "Hide Profile Description" : "Show Profile Description"}
          </button>
          {(showProfileDescription || isLargeScreen) && (
            <ProfileDescriptionCard  className="lg:h-screen" />
          )}
        </section>

        {/* Column 3 */}
        <section className="grid justify-center space-y-4">
          <QualificationCard/>
          <WorkHistoryCard   />
        </section>
      </main>
    </>
  );
}

export default Page;
