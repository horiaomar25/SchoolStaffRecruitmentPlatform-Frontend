import React, {useState} from 'react';
import {useProfile} from '../context/ProfileContext';

const ProfileDescriptionModal = ({ open, toggle }) => {
  
  if (!open) return null;
  const { profile, updateProfile } = useProfile();
  const [description, setDescription] = useState(profile?.profileDescription || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the profile with the new description
    const updatedProfileData = {
      ...profile,
      profileDescription: description, 
    };

    updateProfile(updatedProfileData);
    toggle(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box w-11/12 max-w-md p-6 bg-white rounded-md shadow-lg">
        <form method="dialog">
          <button onClick={toggle} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg mb-2">Profile Description</h3>
        <textarea 
          className="textarea w-full h-40 border border-black resize-none"
          placeholder="Profile Card"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit} className="btn btn-primary mt-4">Save</button>
      </div>
    </div>
  );
};

export default ProfileDescriptionModal;