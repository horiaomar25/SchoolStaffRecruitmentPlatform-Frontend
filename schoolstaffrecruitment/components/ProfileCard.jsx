import React, { useState } from 'react';
import {useProfile} from '../context/ProfileContext';


const ProfileCard = ({profile}) => {
  

  return (
    <div className="card bg-base-100 max-w-md shadow-md relative border border-black">
      <figure className="w-full px-4 py-4">
        <img
          src="https://img.freepik.com/free-photo/office-happy-man-work_144627-6324.jpg"
          alt="profile"
          className="rounded-lg w-full object-cover h-60"
        />
      </figure>
      <div className="card-body w-full">
        <span className='text-gray-400'>Name</span>
        <h2 className="card-title text-center text-2xl truncate">{profile?.firstName} {profile?.lastName}</h2>
        <span className='text-gray-400 '>Role</span>
        <h3 className="card-title break-words">{profile?.position}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;





  