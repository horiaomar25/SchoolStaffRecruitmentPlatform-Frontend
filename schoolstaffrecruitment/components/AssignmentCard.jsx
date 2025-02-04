"use client";
import React, { useState } from 'react'
import useAssignment from '@/customhooks/useAssignment';
import AssignmentModal from './AssignmentModal';

const AssignmentCard = () => {
  const { assignments, loading, error } = useAssignment(); // Fetch assignment data
  const[open, setOpen] = useState(false);
  const[selectedAssignment, setSelectedAssignment] = useState(null); //
  
  // Passes the selected assignment to the modal
  const handleModal= (assignment) => {
    setSelectedAssignment(assignment)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assignments</div>;

 
 
  
    return (
      <>
      {assignments.map((assignment, index) => (
  <div key={index} className="card bg-primary text-primary-content w-96 border border-black">
        <div className="card-body">
          <span className='text-black font-bold'>{assignment.position}</span>
          
          <h3>{assignment.school.schoolName}</h3>
          <div className="card-actions justify-end">
            <button onClick={() => handleModal(assignment)}className="btn hover:bg-blue-400">View</button> 
          </div>


          {open && (
          <AssignmentModal assignment={selectedAssignment} handleClose={handleClose} />
         
        )}

        </div>
      </div>



    ))}
   </> 
    );
 

  
}


export default AssignmentCard
