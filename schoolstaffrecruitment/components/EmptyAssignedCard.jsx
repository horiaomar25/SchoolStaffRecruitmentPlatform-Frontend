import React from 'react'
import assignmentlogo from "../public/assignmentlogo.png"
import Image from 'next/image'

const EmptyAssignedCard = () => {
  return (
    <div  className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
       <Image
        src={assignmentlogo}
        alt="Assignment Logo"
        width={200}
        height={100}
        className="rounded-xl shadow-sm "
      /> 
    </figure>
    <div className="card-body items-center text-center">
  
      <h3>No accepted assignment</h3>
     
    </div>
  </div>
  )
}

export default EmptyAssignedCard