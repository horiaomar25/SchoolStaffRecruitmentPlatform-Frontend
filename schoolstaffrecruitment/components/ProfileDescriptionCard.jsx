import React, { useState } from 'react';
import ProfileDescriptionModal from './ProfileModal';

const ProfileDescriptionCard = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-md relative p-4">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">$29/mo</span>
          </div>

          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>

        {/* Button wrapping the SVG for better accessibility */}
        <button
          onClick={toggle}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition"
          aria-label="Edit Profile Description"
        >
          <svg
            className="w-6 h-6"
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
        </button>
      </div>

      <ProfileDescriptionModal open={open} toggle={toggle} />
    </>
  );
};

export default ProfileDescriptionCard;
