import React from 'react'

const AssignmentModal = ({ assignment, handleClose }) => {
  console.log(assignment);

  // if (assignment == null || assignment == undefined) {
  //   return <div>Assignment not found</div>

  // }




  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">

<div className="card bg-white z-10 w-96 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button onClick={handleClose} className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p>{assignment.postion}</p>
        
      </div>
    </div>
    </div>
    
  )
}

export default AssignmentModal