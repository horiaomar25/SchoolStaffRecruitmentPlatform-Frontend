import React, { useState, useEffect } from 'react';
import AssignmentDetails from './AssignmentDetails';
import EmptyAssignedCard from './EmptyAssignedCard';


const AssignedCard = ({acceptedAssignment, assignedLoading, assignedError}) => {

  const [open, setOpen] = useState(false);

 
  const handleModal = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  if(assignedLoading){
    return <div>Loading...</div>
  }

  if(assignedError){
    return <div>Error</div>
  }

  if(!acceptedAssignment){
    return <EmptyAssignedCard/>

  }

  return (
    <>
    
    <div className="card bg-base-100 w-96 shadow-xl border border-black">
        <figure className="px-10 pt-10">
          <img
            src={acceptedAssignment.school?.schoolPicture}
            alt="S"
            className="rounded-xl w-40 h-40 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{acceptedAssignment.school?.schoolName}</h2>
        
          <div className="card-actions">
            <button onClick={handleModal} className="btn btn-primary mt-6">View Assignment</button>
            {acceptedAssignment && open ? (
              <AssignmentDetails acceptedAssignment={acceptedAssignment} handleClose={handleClose} />
            ) : null}
          </div>
        </div>
      </div>
  
  </>
  );

}
export default AssignedCard;

