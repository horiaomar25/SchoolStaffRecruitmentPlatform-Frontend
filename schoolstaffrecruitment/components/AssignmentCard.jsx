"use client";
import React, { useState } from 'react'
import useAssignment from '@/customhooks/useAssignment';
import AssignmentModal from './AssignmentModal';
import Loading from './Loading';

const AssignmentCard = () => {

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

  // Refetch unassigned assignments after accepting an assignment
  const handleAssignmentAccepted = () => {
    fetchUnassignedAssignment();
  }

  // Handle loading and error states
  if (loading){
    return <Loading/>
  } 

  if (error) {
    return <h2 className='font-bold text-center'>Error loading assignments. Please refresh.</h2>
  }

  if (acceptedAssignment) {
    return (
      <div className="w-full flex justify-center item-center">
        <h2 className="text-xl text-center font-bold text-red-500">You have already accepted an assignment.</h2>
      </div>
    );
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
