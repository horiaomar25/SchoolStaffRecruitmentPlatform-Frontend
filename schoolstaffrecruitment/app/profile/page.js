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
import useProfile from '../../customhooks/useProfile';

function Page() {
  const [showProfileDescription, setShowProfileDescription] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const {data, loading, error} = useProfile();

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

  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      router.push('/'); // Redirect to home page if not authenticated
    }
  }, [token, router]);


  return (
    <>
      <Navigation />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {/* Column 1 */}
        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4">
          <ProfileCard data={data} />
          <FeedbackCard />
        </section>

        {/* Column 2 */}
        <section className="grid justify-center  lg:border lg:border-blue-500 space-y-4 h-full lg:h-screen">
          <button
            onClick={toggleProfileDescription}
            className="btn btn-primary md:hidden lg:hidden"
          >
            {showProfileDescription ? "Hide Profile Description" : "Show Profile Description"}
          </button>
          {(showProfileDescription || isLargeScreen) && (
            <ProfileDescriptionCard data={data} className="lg:h-screen" />
          )}
        </section>

        {/* Column 3 */}
        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4">
          {/* <AssignmentCard /> */}
          <WorkHistoryCard data={data} />
        </section>
      </main>
    </>
  );
}

export default Page;
