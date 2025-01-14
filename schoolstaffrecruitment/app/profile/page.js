"use client"; 
import React from "react";
import useFetchUsers from "../../CustomHooks/FetchProfileData"; 
import ProfileHeader from "../components/ProfileHeader"; 
import Navigation from "../components/Navigation";

function Page() {
  const { data, loading, error } = useFetchUsers();
  console.log(data);

  



  return (
    <main >
      <Navigation/>
      
    </main>
  );
}

export default Page;
