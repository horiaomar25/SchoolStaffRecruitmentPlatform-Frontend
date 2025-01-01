"use client"; 
import React from "react";
import useFetchUsers from "../../CustomHooks/Data"; // Import the custom hook
import ProfileHeader from "../components/ProfileHeader"; // Assuming this component is for displaying user info
import Navigation from "../components/Navigation";

function Page() {
  const { data, loading, error } = useFetchUsers();

  

  const user = data[0]; // Assuming you're fetching one user (you can adapt for multiple users)

  return (
    <main className="flex h-screen">
      <Navigation/>
      <ProfileHeader
        name={loading ? "Loading..." : `${user.firstName} ${user.lastName}`} // Show loading state or name
        role={loading ? "Loading..." : (user.position || "Unknown")} // Show loading or position
        description={loading ? "Loading..." : (user.profileDescription || "No description available")} // Show loading or description
        photo={loading ? "" : user.profilePhoto} // Show loading or photo
        loading={loading} // Pass the loading state to the ProfileHeader
      />
    </main>
  );
}

export default Page;
