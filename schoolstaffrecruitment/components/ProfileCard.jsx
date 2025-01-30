import React, { useState } from 'react';

const ProfileCard = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

    return (
        <div className="card bg-base-100 w-96 shadow-md relative">
          <figure className="px-0 pt-0">
              <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
              />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">Name</h2>
              <h3 className="card-title">Role</h3>
              <p>Experience in early years education</p>
          </div>
          <svg 
            className="absolute bottom-2 right-2 w-6 h-6 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="none"
            stroke="currentColor"
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" />
            <path d="M11 20H17" />
          </svg>
        </div>
    );
}

export default ProfileCard;

  