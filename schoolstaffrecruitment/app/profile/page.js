"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import ProfileCard from "../../components/ProfileCard";
import WorkHistoryCard from "../../components/WorkHistoryCard";
import FeedbackCard from "@/components/FeedbackCard";
import ProfileDescriptionCard from "@/components/ProfileDescriptionCard";
import { useProfile } from "../../context/ProfileContext"; // Profile context for fetching profile
import { useRouter } from 'next/navigation';
import useAuth from '../../customhooks/useAuth'; // Custom hook for handling auth
import QualificationCard from "@/components/QualificationCard";
import Loading from "@/components/Loading";

function Page() {
  // Use profile data from context
  const { profile, loading, error } = useProfile(); // Fetch profile, loading, and error states
  const [showProfileDescription, setShowProfileDescription] = useState(false);
  const { token } = useAuth(); // Get auth token from the useAuth hook
  const router = useRouter();

  // Check authentication and redirect if no token is found
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      router.push('/'); 
    }
  }, [token, router]);

  // Render loading screen while the profile is being fetched
  if (loading) {
    return <Loading/>;
  }

  // Render error message if there's an error fetching profile
  if (error) {
    return <div>Error loading profile: {error}</div>;
  }

  return (
    <>
      <Navigation />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">

        {/* Column 1 */}
        <section className="grid justify-center item-center space-y-4 max-h-screen mt-4">
          <h2 className="text-3xl font-bold text-center mb-auto ">Profile</h2>
          <ProfileCard profile={profile} /> 
          <FeedbackCard />
        </section>

        {/* Column 2 */}
        <section className="grid justify-center item-center space-y-4 ">
          <button
            onClick={() => setShowProfileDescription(!showProfileDescription)}
            className="btn btn-primary md:hidden lg:hidden"
          >
            {showProfileDescription ? "Hide Profile Description" : "Show Profile Description"}
          </button>
          <div className="hidden md:block">
            <ProfileDescriptionCard profile={profile} className="lg:h-screen" /> 
          </div>
          {showProfileDescription && (
            <div className="md:hidden">
              <ProfileDescriptionCard profile={profile} />
            </div>
          )}
        </section>

        {/* Column 3 */}
        <section className="grid justify-center item-center space-y-4">
          <QualificationCard profile={profile} /> 
          <WorkHistoryCard profile={profile} /> 
        </section>
      </main>
    </>
  );
}

export default Page;