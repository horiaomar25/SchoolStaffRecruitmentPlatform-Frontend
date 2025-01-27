"use client";
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import ProfileCard from "../../components/ProfileCard";
import WorkHistoryCard from "../../components/WorkHistoryCard";
import FeedbackCard from "@/components/FeedbackCard";
import ProfileDescriptionCard from "@/components/ProfileDescriptionCard";
import AssignmentCard from "@/components/AssignmentCard";

function Page() {
  const [showProfileDescription, setShowProfileDescription] = useState(false);

  const toggleProfileDescription = () => {
    setShowProfileDescription(!showProfileDescription);
  };

  return (
    <>
      <Navigation />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {/* Column 1 */}
        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4">
          <ProfileCard />
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
          {(showProfileDescription || window.innerWidth >= 764) && (
            <ProfileDescriptionCard  />
          )}
        </section>

        {/* Column 3 */}
        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4">
          <AssignmentCard />
          <WorkHistoryCard />
        </section>
      </main>
    </>
  );
}

export default Page;

