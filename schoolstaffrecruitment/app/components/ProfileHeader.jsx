import React from "react";
import useProfileData from "@/CustomHooks/useProfileData";



const ProfileHeader = () => {
  const {data} = useProfileData();
  console.log(data);

  return (
    <>
      {data.map((profile) => (
      <div key = {profile.id}>
        <h1>{profile.firstName}</h1>
        <h1>{profile.lastName}</h1>
        
      </div>
      ))}
    </>  
  );
  
  

    

  
}



export default ProfileHeader;
