import React from 'react';

const ProfileDescriptionModal = ({ open, toggle }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box w-11/12 max-w-md p-6 bg-white rounded-md shadow-lg">
        <form method="dialog">
          <button onClick={toggle} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg mb-2">Profile Description</h3>
        <textarea className="textarea w-full border border-black" placeholder="Profile Card"></textarea>
      </div>
    </div>
  );
};

export default ProfileDescriptionModal;