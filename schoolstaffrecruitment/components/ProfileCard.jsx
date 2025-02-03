import React, { useState } from 'react';
import {useProfile} from '../context/ProfileContext';


const ProfileCard = () => {

  const { profile, loading, error } = useProfile();
  
 
  
  const [open, setOpen] = useState(false);
 

  const handleOpen = () => {
    setOpen(!open);
  };



  return (
  <div className="card bg-base-100 w-auto shadow-md relative border border-black">
      <figure className=" w-auto px-4 py-4">
        <img
          src="https://img.freepik.com/free-photo/office-happy-man-work_144627-6324.jpg?t=st=1738325283~exp=1738328883~hmac=1699125934aa9e028f11cff27ec2c0563945bc18c1602884c8b80f1711823c66&w=740"
          alt="profile"
          className="rounded-lg w-full h-60 object-cover" />
      </figure>
      <div className="card-body w-full ">
        <span className='text-gray-400'>Name</span>
        <h2 className="card-title text-center text-2xl">{profile?.firstName} {profile?.lastName}</h2>
        <span className='text-gray-400 '>Role</span>
        <h3 className="card-title"> {profile?.position}</h3>

      </div>
      <svg
        className="absolute bottom-2 right-2 w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" />
        <path d="M11 20H17" />
      </svg>
    </div>
  );
};

export default ProfileCard;


  