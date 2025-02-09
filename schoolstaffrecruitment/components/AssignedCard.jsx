import React, { useEffect, useState } from 'react';
import useAssignment from '@/customhooks/useAssignment';
import AssignmentDetails from './AssignmentDetails';


const AssignedCard = () => {

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const {acceptedAssignment,fetchAcceptedAssignment, loading, error} = useAssignment();

  useEffect(() => {
    fetchAcceptedAssignment();

  },[])

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error</div>
  }

  if(!acceptedAssignment){
    return <div>No accepted assignment found.</div>

  }


  
  return (
    <>
    
      <div  className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={acceptedAssignment.school?.schoolPicture}
            alt="S"
            className="rounded-xl border border-black shadow-sm p-10"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{acceptedAssignment.school?.schoolName}</h2>
          <h3>{acceptedAssignment.position}</h3>
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
