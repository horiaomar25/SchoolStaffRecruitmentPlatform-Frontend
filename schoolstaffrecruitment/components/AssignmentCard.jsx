"use client";
import React, { useState } from 'react'
import useAssignment from '@/customhooks/useAssignment';
import AssignmentModal from './AssignmentModal';
import Loading from './Loading';
import { on } from 'events';

const AssignmentCard = ({ onAcceptance }) => {

  const { unassignedAssignments, loading, error, acceptAssignment, fetchUnassignedAssignment,  acceptedAssignment } = useAssignment(); 

  const[open, setOpen] = useState(false);

  const[selectedAssignment, setSelectedAssignment] = useState(null); 

  // Passes the selected assignment to the modal
  const handleModal= (unassigned) => {
    setSelectedAssignment(unassigned)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  // Handle assignment acceptance
  const handleAssignmentAccepted = async () => {
    await acceptAssignment(selectedAssignment.id)
    onAcceptance();
  }

  // Handle loading states
  if (loading){
    return <Loading/>
  } 

  if (error) {
    return <h2 className='font-bold text-center'>Error loading assignments. Please refresh your browser.</h2>
  }


  
    return (
      <>
      {unassignedAssignments.map((unassigned, index) => (
        <div key={index} className="card bg-primary text-primary-content w-96 border border-black">
        <div className="card-body">
          <span className='text-black font-bold'>{unassigned.position}</span>
          
          <h3>{unassigned.school?.schoolName}</h3>
          <div className="card-actions justify-end">
            <button onClick={() => handleModal(unassigned)}className="btn hover:bg-blue-400">View</button> 
          </div>

          {open && (
          <AssignmentModal 
          assignment={selectedAssignment} 
          handleClose={handleClose} 
          acceptAssignment={acceptAssignment}
          onAcceptance={handleAssignmentAccepted} 
         
          />
         
        )}
        </div>
      </div>

    ))}
   </> 
    );
 

  
}


export default AssignmentCard