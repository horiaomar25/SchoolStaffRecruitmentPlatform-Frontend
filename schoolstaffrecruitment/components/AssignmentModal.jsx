import React from 'react'

const AssignmentModal = ({  assignment, handleClose }) => {
 

 console.log(assignment)



  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">

<div className="card bg-white  w-96 shadow-xl">
      <div className="card-body">
        <h2 className='font-bold text-lg'>{assignment.postion}</h2>
        
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
<h2>{assignment.position}</h2>
        
      </div>
    </div>
    </div>
    
  )
}

export default AssignmentModal