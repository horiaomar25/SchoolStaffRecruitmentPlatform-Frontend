"use client"; 
import React from "react";
import useFetchUsers from "../../CustomHooks/useProfileData"; 
import ProfileHeader from "../components/ProfileHeader"; 
import Navigation from "../components/Navigation";

function Page() {
  const { data, loading, error } = useFetchUsers();
  console.log(data);

  



  return (
    <main >
      <Navigation/>
      <ProfileHeader/>
      
    </main>
  );
}

export default Page;
