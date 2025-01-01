import React from "react";

const ProfileHeader = ({ name, role, description, photo, loading }) => {
  if (loading) {
    return (
      <div className="flex-1 bg-gray-100 p-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <img src={photo || "/default-profile.png"} alt="Profile" className="profile-photo" />
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileHeader;
