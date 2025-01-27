"use client";
import React from "react";
import Navigation from "../../components/Navigation";
import ProfileCard from "../../components/ProfileCard";
import WorkHistoryCard from "../../components/WorkHistoryCard";
import FeedbackCard from "@/components/FeedbackCard";
import ProfileDescriptionCard from "@/components/ProfileDescriptionCard";
import AssignmentCard from "@/components/AssignmentCard";

function Page() {
  return (
    <>
      <Navigation />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
       
        <section className="grid justify-center  lg:border lg:border-blue-500 space-y-4">
          <ProfileCard />
          <FeedbackCard />
        </section>

        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4 h-full lg:h-screen">
          <ProfileDescriptionCard className=" lg:h-screen" />
        </section>

       
        <section className="grid justify-center lg:border lg:border-blue-500 space-y-4">
          <AssignmentCard />
          <WorkHistoryCard />
        </section>
      </main>
    </>
  );
}

export default Page;
